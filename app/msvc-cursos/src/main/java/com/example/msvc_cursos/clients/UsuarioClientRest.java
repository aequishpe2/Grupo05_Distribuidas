package com.example.msvc_cursos.clients;

import com.example.msvc_cursos.models.Usuario;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

@FeignClient(name = "mscv-usuarios", url = "localhost:8001")
public interface UsuarioClientRest {

    @GetMapping("/api/usuarios/detalle/{id}")
    Usuario detalle(@PathVariable Long id);

    @PostMapping("/api/usuarios/guardar")
    Usuario crear(@RequestBody Usuario usuario);

    @DeleteMapping("/api/usuarios/eliminar/{id}")
    void eliminar(@PathVariable Long id);
}
