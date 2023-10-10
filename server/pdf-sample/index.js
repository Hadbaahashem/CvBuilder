module.exports = ({
    name,
    email,
    phone,
    linkedin,
    github,
    skills,
    exp1_org,
    exp1_pos,
    exp1_desc,
    exp1_dur,
    exp1_dur2,
    proj1_title,
    proj1_link,
    proj1_desc,
    proj2_title,
    proj2_link,
    proj2_desc,
    edu1_school,
    edu1_year,
    edu1_year2,
    edu1_qualification,
    edu1_desc,
    edu2_school,
    edu2_year,
    edu2_year2,
    edu2_qualification,
    edu2_desc,
    extra_1,
    extra_2,
  }) => {
    return `
          <!doctype html>
          <html>
              <head>
                  <!-- Font Awesome -->
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
                  <!-- Bootstrap core CSS -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
                  <!-- Material Design Bootstrap -->
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
      
                  <style>
                    html{
                        zoom: 0.60;
                    }    
                    .rule{
                      border-bottom: 1px solid black;
                      width:80%;
                    }
                    .mobile{
                      margin-top:-10px;
                    }
                    .email{
                      margin-bottom: 0;    
                    }
                    body{
                      font-family: 'Garamond';
                    }
                  </style>
              
              </head>
              <body>
      
              <div class="col-lg-8 mx-auto">
              <br/><br/>
              <div class="row text-center">
              <div class="col-lg-6">
                      <h1><b>${name}</b></h1>
                      <p class="lead email"><strong>Email:</strong> ${email}</p>
                      <p class="lead"><strong>Contact:</strong> (+20)${phone}</p>
                      <p class="lead"><strong>LinkedIn:</strong> ${linkedin}</p>
                      <p class="lead"><strong>Github:</strong> ${github}</p>
                  </div>    
              </div>
            
              <hr/>
              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Skills</b></h3>
              </div>
              <div class="col-lg-8 row mx-auto">
                  <p class="lead" style="font-size: 23px;"> ${skills}</p>
              </div>
      
              
              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Experience</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${exp1_org}: ${exp1_pos}</b> (${exp1_dur} to ${exp1_dur2})</p>
                    <p class="mt-0" style="font-size: 23px;">${exp1_desc}</p>
              </div>
             
      
              
              <div class="col-lg-8 mx-auto bg-light ">
                    <h3><b>Projects</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${proj1_title}: </b>( ${proj1_link})</p>
                    <p class="mt-0" style="font-size: 23px;">${proj1_desc}</p>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${proj2_title}: </b> ( ${proj2_link})</p>
                    <p class="mt-0" style="font-size: 23px;">${proj2_desc}</p>
              </div>
      
      
              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Education</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${edu1_school}: </b> (${edu1_qualification} ${edu1_year} to ${edu1_year2})</p>
                    <p class="mt-0" style="font-size: 23px;" >${edu1_desc}</p>
              </div>
              <div class="col-lg-8 mx-auto">
                    <p class="lead"><b>${edu2_school}: </b> (${edu2_qualification}: ${edu2_year} -- ${edu2_year2})</p>
                    <p class="mt-0" style="font-size: 23px;">${edu2_desc}</p>
              </div>
      
              <div class="col-lg-8 mx-auto bg-light">
                    <h3><b>Languages & Hobbies</b></h3>
              </div>
              <div class="col-lg-8 mx-auto">
                    <ul>
                      <li><p class="lead"><b>Languages: </b>${extra_1} </p></li>
                      <li><p class="lead"><b>Hobbies: </b>${extra_2} </p></li>
                    </ul>
                    
              </div>
              
                  <!-- JQuery -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                  <!-- Bootstrap tooltips -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
                  <!-- Bootstrap core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
                  <!-- MDB core JavaScript -->
                  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
              </body>
          </html> 
        `;
  };