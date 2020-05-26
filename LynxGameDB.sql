CREATE DATABASE IF NOT EXISTS lynxgame_db;
USE lynxgame_db;

CREATE TABLE IF NOT EXISTS desarrolladores_game(
	des_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    des_email VARCHAR(30),
    des_num_convenio INT NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS genero_game(
	gen_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    gen_nombre VARCHAR(30)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS precio_game(
	pre_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pre_regular DECIMAL(6,2),
    pre_descuento DECIMAL(6,2),
    pre_apartado DECIMAL(6,2)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS videojuegos(
	vj_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    vj_descripcion VARCHAR(100),
    vj_fecha_lanzamiento DATE,
    vj_class_edad INT NOT NULL,
	CONSTRAINT vj_class_edad CHECK (vj_class_edad IN ('C','E','E+','T','M','RP','A')),
    vj_des_id INT NOT NULL,
    CONSTRAINT Fk_vj_des_id
    FOREIGN KEY (vj_des_id)
    REFERENCES desarrolladores_game(des_id),
	vj_gen_id INT NOT NULL,
    CONSTRAINT Fk_vj_gen_id
    FOREIGN KEY (vj_gen_id)
    REFERENCES genero_game(gen_id),
	vj_pre_id INT NOT NULL,
    CONSTRAINT Fk_vj_pre_id
    FOREIGN KEY (vj_pre_id)
    REFERENCES precio_game(pre_id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS ciudad(
	ciu_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ciu_nombre VARCHAR(30)
)ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS calle_num(
	cn_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cn_calle INT NOT NULL,
    cn_Num_Ext INT NOT NULL,
    cn_Num_int INT NOT NULL
)ENGINE=INNODB;
CREATE TABLE IF NOT EXISTS cp(
	cp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cp_Codigo INT NOT NULL,
	cp_calle_num INT NOT NULL,
    CONSTRAINT Fk_cp_calle_num
    FOREIGN KEY (cp_calle_num)
    REFERENCES calle_num(cn_id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS direccion(
	dir_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	dir_cp INT NOT NULL,
    CONSTRAINT Fk_dir_cp
    FOREIGN KEY (dir_cp)
    REFERENCES cp(cp_id),
 	dir_calle_num INT NOT NULL,
    CONSTRAINT Fk_dir_calle_num
    FOREIGN KEY (dir_calle_num)
    REFERENCES calle_num(cn_id),
	dir_ciudad INT NOT NULL,
    CONSTRAINT Fk_dir_ciudad
    FOREIGN KEY (dir_ciudad)
    REFERENCES ciudad(ciu_id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS personal_lynxgame(
	per_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    per_nombre VARCHAR(30),
    per_telefono INT NOT NULL,
    per_salario DECIMAL(7,2),
	per_dir_id INT NOT NULL,
    CONSTRAINT Fk_per_dir_id
    FOREIGN KEY (per_dir_id)
    REFERENCES direccion(dir_id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS tarjeta_credit_debit(
	tar_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tar_banco VARCHAR(20),
	CONSTRAINT tar_banco CHECK (tar_banco IN ('BBVA','BANAMEX','SANTANDER','SCOTIABANK')),
    tar_numero INT NOT NULL,
    tar_fecha DATE,
	tar_cvv INT NOT NULL
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS clientes_lynxgame(
	cli_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cli_nombre VARCHAR(30),
    cli_email VARCHAR(30),
    cli_edad INT NOT NULL,
    cli_creditos DECIMAL(7,2),
	cli_tar_id INT NOT NULL,
    CONSTRAINT Fk_cli_tar_id
    FOREIGN KEY (cli_tar_id)
    REFERENCES tarjeta_credit_debit(tar_id),
    cli_dir_id INT NOT NULL,
    CONSTRAINT Fk_cli_dir_id
    FOREIGN KEY (cli_dir_id)
    REFERENCES direccion(dir_id)
)ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS suscripcion_lynxgame(
	sus_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    sus_fecha_inicio DATE,
    sus_fecha_termino DATE,
	sus_cli_id INT NOT NULL,
    CONSTRAINT Fk_sus_cli_id
    FOREIGN KEY (sus_cli_id)
    REFERENCES clientes_lynxgame(cli_id),
    sus_per_id INT NOT NULL,
    CONSTRAINT Fk_sus_per_id
    FOREIGN KEY (sus_per_id)
    REFERENCES personal_lynxgame(per_id)
)ENGINE=INNODB;