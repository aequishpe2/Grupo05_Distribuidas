package com.example.mscv.usuarios.services;

import com.example.mscv.usuarios.models.entity.Usuario;

import java.util.List;
import java.util.Optional;

public interface UsuarioService {
    List<Usuario> listar();
    Optional<Usuario> porId(long id);
    Usuario guardar(Usuario usuario);
    void eliminar(Long id);
}
