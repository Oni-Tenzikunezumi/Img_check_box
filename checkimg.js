//変数定義
const boxsize = 8;
const imgwidth = "100px";
const imgfolder = "img/";
let $checkimg = document.getElementsByName("arr");
let arr = new Array(boxsize);

const dict = {
    Kuromame_Lemon_: ["赤色（あかいろ）", ""],
    Kuromame_Vineger_: ["赤色（あかいろ）", ""],
    Bakingpowder_Strawberry_: ["青色（あおいろ）", ""],
    Insecticide_Fire_: ["緑色（みどりいろ）", ""],
}

const namearr = [
    {
        path: imgfolder + "",
        button: "黒豆",
        tag:"Kuromame",
    }, {
        path: imgfolder + "レモン.png",
        button: "レモン",
        tag: "Lemon",
    }, {
        path: imgfolder + "ベーキングパウダー.png",
        button: "ベーキングパウダー",
        tag: "Bakingpowder",
    }, {
        path: imgfolder + "",
        button: "いちご",
        tag: "Strawberry",
    }, {
        path: imgfolder + "",
        button: "トマト",
        tag: "Tomato",
    }, {
        path: imgfolder + "",
        button: "防虫剤",
        tag: "Insecticide",
    }, {
        path: imgfolder + "",
        button: "火（あぶる）",
        tag: "Fire",
    }, {
        path: imgfolder + "",
        button: "お酢（す）",
        tag: "Vineger",
    },
]

//関数定義（処理系）
function buttonchange() {
    for (let i = 0; i < 8; i++) {
        let id = 'a' + String(i + 1);
        let ele = namearr[i];
        let $check = document.getElementById(id);

        let check = ele.button;
        let path = ele.path;

        if(path !== imgfolder){
            let image = `<img src="${path}" height="auto" width="${imgwidth}" /><br>${check}`;
            $check.innerHTML = image;
        }
    }
}

function nodelist2arr() {
    $checkimg.forEach((element, index) => {
        if (element.checked) { arr[index] = 1; }
        else { arr[index] = 0; }
    });
}

function arr2str() {
    let str = "";
    arr.forEach((element,index) => {
        if(element === 1){
            str += namearr[index].tag + "_" ;
        }
    });
    return str;
}

function ismatch() {
    let $eles = document.getElementById("form-text");
    let ele = dict[arr2str(arr)];

    if (ele) {
        let text = ele[0];
        let url = ele[1];
        let aurl = `<label><a href='${url}' target=”_blank” rel='noopener noreferrer'>${text}</a></label>`;
        $eles.innerHTML = aurl;
    } else {
        $eles.innerHTML = "?";
    }
}

function showary() {
    nodelist2arr();
    arr2str();
    ismatch();
    //document.getElementById("form-text2").innerHTML = arr;
};

//関数定義（操作同期）
function inputChange() {
    showary();
}

window.onload = () => {
    buttonchange();
    showary();
}