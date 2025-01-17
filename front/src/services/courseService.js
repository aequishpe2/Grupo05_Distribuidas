import axios from 'axios';

const api = 'http://localhost:8002/api/cursos';

export const getCourses = async () => {
  const response = await axios.get(api);
  return response.data;
};

export const createCourse = async (course) => {
  await axios.post(api + '/guardar', course);
};

export const editCourse = async (course) => {
  await axios.put(api + `/editar/${course.id}`, course);
};

export const deleteCourse = async (id) => {
  await axios.delete(api + `/eliminar/${id}`);
};

export const getCourseDetail = async (id) => {
  const response = await axios.get(api + `/detalle/${id}`);
  return response.data;
};
