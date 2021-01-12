export default class DataInput {
  protected idform: string = "";
  protected header: string = "";
  protected body: string = "";
  protected type: string = "";

  constructor(idform: string, header: string, body: string, type: string) {
    this.idform = idform;
    this.header = header;
    this.body = body;
    this.type = type;
  }

  public getidform() {
    return this.idform;
  }
  public setidform(idform: string) {
    return (this.idform = idform);
  }

  public getheader() {
    return this.header;
  }
  public setheader(header: string) {
    return (this.header = header);
  }
  public getbody() {
    return this.body;
  }
  public setbody(body: string) {
    return (this.body = body);
  }
  public gettype() {
    return this.type;
  }
  public settype(type: string) {
    return (this.type = type);
  }
}
