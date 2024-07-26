package com.example.msvc_cursos.models.entity;
import jakarta.persistence.*;

@Entity
@Table(name="curso_usuario")
public class CursoUsuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_cur_usu;

    @Column(name = "id_usuario", unique = true)
    private Long usuarioId;

    public Long getId() {
        return id_cur_usu;
    }

    public void setId(Long id) {
        this.id_cur_usu = id;
    }

    public Long getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Long usuarioId) {
        this.usuarioId = usuarioId;
    }
}
