package com.example.msvc_cursos.repositories;

import com.example.msvc_cursos.models.entity.Curso;
import org.springframework.data.repository.CrudRepository;

public interface CursoRepository extends CrudRepository<Curso, Long> {
}