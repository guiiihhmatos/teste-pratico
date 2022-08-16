package teste.pratico.spring.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table (name = "container")
@Data

public class Container implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String cliente;
	private String numeroContainer;
	private int tipo;
	private String status;
	private String categoria;
	private String movimentacao;
	private String dataInicio;
	private String dataFim;
	
	
	
}
