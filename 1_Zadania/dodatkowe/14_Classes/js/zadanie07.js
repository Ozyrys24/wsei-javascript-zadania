console.log("Zadanie 07:");
class MenuGenerator {
    constructor(type, items) {
        this.type = type;
        this.items = items;
    }
    getType() { console.log("Typ: "+this.type) }
    showItems() {
        let i=0;
        this.items.forEach(item => {
            console.log("Element "+(++i)+": "+item);
        });
    }
}
class HorizontalMenuGenerator extends MenuGenerator { };
let hMenuGenerator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
hMenuGenerator.getType();
hMenuGenerator.showItems();

class VerticalMenuGenerator extends MenuGenerator {
    animation() { console.log("Animacja menu typu vertical"); }
}
let vMenuGenerator = new VerticalMenuGenerator("vertical", ['home', 'contact']);
vMenuGenerator.getType();
vMenuGenerator.showItems();
vMenuGenerator.animation();

