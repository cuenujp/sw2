package logica;
import java.io.File;
import java.io.FileWriter;
import java.util.Calendar;

import javax.annotation.PostConstruct;


public class ArchivoLog{

	FileWriter archivo;
	

	
	public ArchivoLog(){
		
	}
     public void crearLog(String operacion) {

   		if (new File("log.txt").exists() == false){
			try {
				archivo = new FileWriter(new File("log.txt"),false);
				System.out.println("se creo el archivo");
				this.imprimir(" -ejecutando crearLog- ");
				
			} catch (Exception e) {
				// TODO: handle exception
				System.out.println("error creando el archivo existente "+ e);
			}
        	}
		else{
			try {
				
				this.imprimir(" -ejecutando metodo imprimir- ");
				
				System.out.println("se agrego informacion en el archivo");
								
			} catch (Exception e) {
				// TODO: handle exception
				System.out.println("error escribiendo en nuevo archivo");
				
			}
		}
     }
    
	@crearLog
     public void agregarLog(String linea) {
		  this.imprimir(" -ejcutando metodoagregarLog- ");
          this.crearLog(" -ejecucuion metodo CrearLog- "+linea); //Guarda en el Log el evento realizado
          System.out.println(" linea agregada al archivo");
     }

	@crearLog
    public void imprimir(String operacion){
    	try {
    		archivo = new FileWriter(new File("log.txt"), true);
    		Calendar fechaActual = Calendar.getInstance(); 
    		archivo.write((String.valueOf(fechaActual.get(Calendar.DAY_OF_MONTH))
    				+"/"+String.valueOf(fechaActual.get(Calendar.MONTH)+1)
    				+"/"+String.valueOf(fechaActual.get(Calendar.YEAR))
    				+";"+String.valueOf(fechaActual.get(Calendar.HOUR_OF_DAY))
    				+":"+String.valueOf(fechaActual.get(Calendar.MINUTE))
    				+":"+String.valueOf(fechaActual.get(Calendar.SECOND)))+"; "+operacion+"\r\n");
    		archivo.close(); //Se cierra el archivo
			
		} catch (Exception e) {
			// TODO: handle exception
		}
    }

}
