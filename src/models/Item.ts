import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    category: Number,
    prefix: String,
    postfix: String,
    maxDam: Number,
    minDam: Number,
    minWound: Number,
    maxWound: Number,
    crit: Number,
    balance: Number,
    durability: Number,
    upgrades: [
        
    ],
});

const Item = mongoose.model("Item", itemSchema);

export default Item;

/*

    장비
인챈트 : {
	id: number,
	vars: []
}
인챈트2
최대공: number
마공 : number
최소공 : number
최소부상 : number
최대부상 : number
크리티컬 : number
밸런스 : number
내구력 : number
장개 : len(7)[
	strings
]
피어싱 : number 인챈트 제외
에르그 : {
	rank: char
	level: number
}
심볼강화 : number - 심볼강화 효과는 다른 db에서 주기때문에 숫자만 표현,
특개: {
	category: S or R binary
	level: int(8)
}
세트아이템 : number arr - 다른 db에서 가져오기
인챈트 불가: bool

세공reforge
*/