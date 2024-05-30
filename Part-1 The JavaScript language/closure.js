function add() {
    let a = 1;

    function addChild() {
        console.log(a+5);
    }

    return addChild
}

const catchChild = add()
catchChild();