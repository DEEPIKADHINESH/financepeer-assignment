const {User}=require("../modules/user")
const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
describe("user.generateAuthToken",()=>{
    it("should return a valid jwt token",()=>{
        const payload={_id:new mongoose.Types.ObjectId().toHexString(),isAdmin:true}
        const user=new User(payload)
        const token=user.generateAuthToken();
        const decoded=jwt.verify(token,"jwtPrivateKey")
        expect(decoded).toMatchObject(payload)
    })
})