const userProduct = require("../service/product.js");


async function getAllProduct(req, res){
    try{
        const rows = await productService.getAllProduct();

        res.status(200).json(rows);
    }catch(erro){
        res.status(500).send({
            message: "Error getting products",
            body: error.message,
        });
    }
}


module.exports={
    getAllProduct,
}