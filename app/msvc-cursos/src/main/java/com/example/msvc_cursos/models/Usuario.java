package com.example.msvc_cursos.models;

public class Usuario {

    private Long id_usuario;
    private String nombre;
    private String email;
    private String password;

    public Long getId() {
        return id_usuario;
    }

    public void setId(Long id) {
        this.id_usuario = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
