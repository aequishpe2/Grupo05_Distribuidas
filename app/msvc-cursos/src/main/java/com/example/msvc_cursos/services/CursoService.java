package com.example.msvc_cursos.services;

import com.example.msvc_cursos.models.Usuario;
import com.example.msvc_cursos.models.entity.Curso;

import java.util.List;
import java.util.Optional;

public interface CursoService {
    List<Curso> listar();
    Optional<Curso> porId(Long id);
    Curso guardar(Curso curso);
    void eliminar(Long id);
    Optional<Usuario> agregarUsuario(Usuario usuario, Long cursoId);
    Optional<Usuario> agregarUsuarioPorId(Long usuarioId, Long cursoId); // Nuevo método
    Optional<Usuario> crearUsuario(Usuario usuario, Long cursoId);
    Optional<Usuario> eliminarUsuario(Usuario usuario, Long cursoId);
    Optional<Usuario> eliminarUsuarioPorId(Long usuarioId, Long cursoId); // Nuevo método
}
