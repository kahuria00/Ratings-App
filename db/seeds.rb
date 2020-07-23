# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



matatus=Matatu.create([
    {
        name: "catalyst-Ngong Road",
        image_url: "https://cdn.mpasho.co.ke/wp-content/uploads/2017/08/mackbully-1.png"
        
    },

    {
        name: "Kite-Rongai",
        image_url: "https://cdn.standardmedia.co.ke/sdemedia/sdeimages/tuesday/afwxixq2epotox5ba09b140e378.jpg"
    },


    {
        name: "The Punisher (route 111)",
        image_url: "https://classic105.s3.amazonaws.com/wp-content/uploads/2017/02/PUNISHER-NGONG.jpg"
    },

    {
       name: "Umoinner" ,
       image_url: "https://pbs.twimg.com/media/DdTfFDBW0AArk9s.jpg"
    },

    {
        name: "Aneiro Githurai (45)",
        image_url: "https://i.ytimg.com/vi/pfaGbiK2PaU/hqdefault.jpg"

    },

    {
        name: "Plane 105",
        image_url: "https://res.feednews.com/assets/v2/4ac6d5de7006694956b7ab4abdafba75?quality=uhq&format=jpeg&resize=720&watermark=true"
    }

])

reviews=Review.create([
    {
     title: "Good Matatu",
     description: "best customer service,great time",
     score: 5,
     matatu: matatus.first

    },

    {
        title: "Bad Matatu",
        description: "bad customer service,worst time",
        score: 1,
        matatu: matatus.first
    }


])