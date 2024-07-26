import React, { useState, useEffect } from 'react';
import { getCourses, createCourse, editCourse, deleteCourse, getCourseDetail } from '../services/courseService';
import 'bootstrap/dist/css/bootstrap.min.css';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ nombre: '' });
  const [editingCourse, setEditingCourse] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const coursesData = await getCourses();
    setCourses(coursesData);
  };

  const handleCreateCourse = async () => {
    await createCourse(newCourse);
    setNewCourse({ nombre: '' });
    fetchCourses();
    setUpdateMessage('Curso creado correctamente.');
  };

  const handleEditCourse = async () => {
    await editCourse(editingCourse);
    setEditingCourse(null);
    fetchCourses();
    setShowEditModal(false); // Cerrar el modal después de editar
    setUpdateMessage('Curso actualizado correctamente.');
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('¿Está seguro que desea eliminar este curso?')) {
      await deleteCourse(id);
      fetchCourses();
      setUpdateMessage('Curso eliminado correctamente.');
    }
  };

  const handleChangeNewCourse = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const startEditingCourse = (course) => {
    setEditingCourse(course);
    setShowEditModal(true); // Mostrar el modal al iniciar la edición
  };

  const viewCourseDetail = async (id) => {
    const courseDetail = await getCourseDetail(id);
    setSelectedCourse({
      ...courseDetail,
      usuarios: courseDetail.usuarios || [] // Asegúrate de que 'usuarios' esté inicializado como un arreglo vacío
    });
    setShowDetailModal(true);
  };

  return (
    <div>
      {updateMessage && (
        <div className="alert alert-success" role="alert">
          {updateMessage}
        </div>
      )}

      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre del Curso"
          name="nombre"
          value={newCourse.nombre}
          onChange={handleChangeNewCourse}
        />
        <button className="btn btn-primary mb-2" onClick={handleCreateCourse}>
          Crear Curso
        </button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.nombre}</td>
              <td>
                <button className="btn btn-info mr-2" onClick={() => viewCourseDetail(course.id)}>
                  Ver Detalles
                </button>
                <button className="btn btn-warning mr-2" onClick={() => startEditingCourse(course)}>
                  Editar
                </button>
                <button className="btn btn-danger" onClick={() => handleDeleteCourse(course.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal para editar curso */}
      {editingCourse && (
        <div className="modal fade show" style={{ display: showEditModal ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Editar Curso</h5>
                <button type="button" className="close" onClick={() => setShowEditModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="editNombre">Nombre del Curso</label>
                  <input
                    type="text"
                    className="form-control"
                    id="editNombre"
                    name="nombre"
                    value={editingCourse.nombre}
                    onChange={(e) => setEditingCourse({ ...editingCourse, [e.target.name]: e.target.value })}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>
                  Cancelar
                </button>
                <button type="button" className="btn btn-primary" onClick={handleEditCourse}>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal para ver detalles del curso */}
      {showDetailModal && selectedCourse && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detalles del Curso</h5>
                <button type="button" className="close" onClick={() => setShowDetailModal(false)}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div>
                  <p><strong>ID:</strong> {selectedCourse.id}</p>
                  <p><strong>Nombre:</strong> {selectedCourse.nombre}</p>
                  <p><strong>Usuarios Matriculados:</strong></p>
                  <ul>
                    {selectedCourse.usuarios && selectedCourse.usuarios.length > 0 ? (
                      selectedCourse.usuarios.map(user => (
                        <li key={user.id}>{user.nombre} ({user.email})</li>
                      ))
                    ) : (
                      <li>No hay usuarios matriculados.</li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowDetailModal(false)}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTable;
  