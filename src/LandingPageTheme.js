//Utility class for LandingPageTemplate.js
export default class LandingPageTheme{
    constructor(){
        this.colStyle={
            height: '55vh',
            border: '00px solid white',
            padding: '0 !important',
            display: 'table',
            textAlign: 'center',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            fontFamily: 'Arvo',
            marginTop:'2%'
        }
        this.pic1 = {
            backgroundImage: 'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/01/20191215_131418-scaled.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
        this.pic6={
            backgroundImage: 'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/02/wordpress-581849_1920.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
        this.headerStyle={
            height: '80vh',
            display: 'table',
            textAlign: 'center',
            backgroundImage: 'url("https://wpreact.emmalynnn.com/wp-content/uploads/2020/02/plant-2004483_1920-1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Arvo',
            color:'white',
        }
        this.headerText={
            fontSize:'50px',
            fontWeight:'700'
        }
        this.containerStyle = {
            maxWidth: '95vw'
        }
        this.vAlign = {
            display: 'table-cell',
            verticalAlign: 'middle',
        }
        this.text = {
            padding: '30px 30px',
            fontSize:'18px',
        }
        this.btnPrimaryColor = 'black'
        this.btnSecondaryColor= 'white'
    }
    
}
