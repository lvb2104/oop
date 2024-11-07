class Message {
    public content: string | undefined;
    public sender: string | undefined;
}

class Woman1 {
    public fullname: string | undefined;
    public age: number | undefined;
    private weight: number | undefined;
    
    introduce(language: string, isFull: boolean = true): Message {
        const msg = new Message();
        msg.content = `Xin chao ! Toi la mot nguoi phu nu\n`;
        if (language === 'Vietnam') {
            if (isFull) {
                msg.content += `Toi rat xinh dep\n`;
            }
        }
        else {
            msg.content = `Hi ! I'm a woman\n`;
            if (isFull) {
                msg.content += `I'm a very beautiful\n`;
            }
        }
        return msg;
    }
}

const hariwon1 = new Woman1();
let msg: Message = hariwon1.introduce('English');
console.log(msg.content)