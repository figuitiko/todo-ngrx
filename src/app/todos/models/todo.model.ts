

export  class Todo {
    public id: number;
    public text: string;
    public isComplete: boolean;

    constructor(text:string) {
      this.text = text;
      this.id = Math.random();
      this.isComplete = false;
    }

}
