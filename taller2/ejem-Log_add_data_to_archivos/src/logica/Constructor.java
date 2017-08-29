package logica;

public class Constructor {
	
	public Constructor() {
		// TODO Auto-generated constructor stub
		System.out.println("constructor..");
		this.ejecucion1();
		
	}
	@PostConstructor
	public void ejecucion1(){
		System.out.println("metodo ejecutar1...");
		
	}

	@PostConstructor
	public void ejecucion2(){
		System.out.println("metodo ejecutar2..");
	}
}
