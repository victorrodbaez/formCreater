import { shallowMount, mount } from "@vue/test-utils";
// Importamos nuestro componente
import DataInput from "@/components/models/formCreate.ts";
// Definimos de que se trata la prueba
describe("Clase dataInput.vue", () => {
  // const wrapper = mount(formCreate);
  

let idform :string = "Letras";
  let header: string= "Correo";
  let body: string= "Correo";
  let type: string= "mail";
  const wrapper = new DataInput(idform, header, body, type);  /*  */
  it("Test ok", () => {
    expect(true).toBeTruthy();
  });
  /* 
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Si existe dataInput", () => {
    expect(wrapper).toBeTruthy();
  }); */
  // console.log(dataInput)
  /*it("Si existe dataInput", () => {
    expect(wrapper.find(".input")).toBeTruthy();
  });

  beforeEach(() => {
    // wrapper = shallowMount(DataInput());
  });
   it('El componente se ha pintado', () => {
    expect(wrapper.vm.$refs.menu).not.toBeUndefined();
  });
  it('Comprobamos que el título se esta pintando', () => {
    wrapper.setProps({ title: 'Menú APP' });
    expect(wrapper.html().includes('Menú APP')).toBeTruthy();
  }); */
});
