import React from 'react'

function Certification() {
  return (
    <>
        <div className='certificates'>
            <div className='header' >
            <h4>RECOGNISED BY</h4>
            </div>
            <div className='certificates_logo'>
            <img width={'90px'} src="https://unfold-consulting.com/wp-content/uploads/2018/04/nasscom_logo-svg-300x205.png" alt="" />
                <img width={'130px'} src="https://getlogo.net/wp-content/uploads/2019/12/startup-india-hub-logo-vector.png" alt="" />
                <img width={'120px'} src="https://www.exchange4media.com/news-photo/123861-big1.jpg" alt="" />
                <img width={'100px'} src="https://www.classiciasacademy.com/blog/wp-content/uploads/2017/07/moc-logo.jpg" alt="" />
            </div>
        </div>

        <div className="companies">
            <div className="company_header">
            <center>
            <h2><span style={{color:'#121552',fontWeight:"bolder"}}>200+</span> Companies have hired Adacode learners</h2>
            </center>
            </div>
            <div className="">
                {/* first row */}
                <div className='company_logo'>
                <img width={'80px'} src="https://static.vecteezy.com/system/resources/previews/019/017/437/non_2x/amazon-logo-free-png.png" alt="" />
                <img width={'80px'} src="http://1.bp.blogspot.com/-E8bbICo_fbY/U3s0SOf2JNI/AAAAAAAAAlA/sOfntwNl3Dg/s1600/techmahindra_logo.png" alt="" />
                <img width={'80px'} src="https://logos-marcas.com/wp-content/uploads/2020/09/Oracle-Logo.png" alt="" />
                <img width={'80px'} src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png" alt="" />
                </div>
                {/* second row */}
                <div className='company_logo'>
                <img width={'80px'} src="https://images02.military.com/sites/default/files/2019-02/CGI-VTP-Logo-1200x800.png" alt="" />
                <img width={'80px'} src="https://purepng.com/public/uploads/large/purepng.com-hp-logologobrand-logoiconslogos-2515199390657l82v.png" alt="" />
                <img width={'80px'} src="https://www.fluidogroup.com/wp-content/uploads/2018/10/infosys-logo-1.png" alt="" />
                <img width={'80px'} src="https://1000logos.net/wp-content/uploads/2023/03/Optum-Logo-2011.png" alt="" />
                </div>
                {/* third row */}
                <div className="company_logo">
                <img width={'80px'} src="http://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png" alt="" />
                <img width={'80px'} src="https://www.cyberark.com/wp-content/uploads/2016/05/Cognizant_Logo_Brand_Blue_RGB.png" alt="" />
                <img width={'80px'} src="https://logosmarcas.net/wp-content/uploads/2020/09/IBM-Logo-1946-1956.png" alt="" />
                <img width={'80px'} src="https://logos-world.net/wp-content/uploads/2020/11/Jio-Logo.png" alt="" />
                </div>
                {/* fourth row */}
                <div className="company_logo">
                <img width={'80px'} src="https://www.biznextindia.com/wp-content/uploads/2018/08/HCL-L.jpg" alt="" />
                <img width={'80px'} src="https://logodownload.org/wp-content/uploads/2019/10/pwc-logo-0-768x768.png" alt="" />
                <img width={'80px'} src="https://www.equitypandit.com/wp-content/uploads/2023/07/birlasoft-logo-scaled-1-1920x878.jpg" alt="" />
                <img width={'80px'} src="https://www.equitybulls.com/equitybullsadmin/uploads/Intellect%20Design%20Arena%20Limited%20Logo.jpg" alt="" />
                </div>
                {/* fifth row */}
                 <div className="company_logo">
                <img width={'80px'} src="https://logosmarken.com/wp-content/uploads/2021/09/Autodesk-Neues-Logo.png" alt="" />
                <img width={'80px'} src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook" alt="" />
                <img width={'80px'} src="http://media3.popsugar-assets.com/files/2015/09/01/905/n/1922398/a6de4483_GOOGLELOGO_1.xxxlarge_2x.jpg" alt="" />
                <img width={'80px'} src="https://www.gannett-cdn.com/presto/2020/10/02/PPHX/15c0636b-410b-475f-94cf-9cc33e9eb596-logo-classicblue-3000px.png" alt="" />
                </div>


            </div>
        </div>
        <div className='more'>
            <p>And many more.....</p>
        </div>
    </>
  )
}

export default Certification