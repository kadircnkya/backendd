var mongoose=require("mongoose");
var dbURI='mongodb://localhost/mekanbul';
//mongodb+srv://kadir:kadir@cluster0.fokmvqe.mongodb.net/
mongoose.connect(dbURI);

mongoose.connection.on("connected",function(){
      console.log(dbURI+"adresindeki veri tabanına bağlandı");
});

mongoose.connection.on("error",function(){
    console.log(dbURI+"bağlantı sağlanamadı");
});


mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"bağlantı kesildi");
});

kapat=function(msg,callback){
    mongoose.connection.close(function(){

         console.log("bağlantı kapatıldı"+msg);
         callback();
    });

    process.on("SIGINT",function(){
        kapat("uygulama kapatıldı",function(){
            process.exit(0);
        })
    })

}
require("./venue");