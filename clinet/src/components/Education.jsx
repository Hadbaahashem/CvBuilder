import React from "react";

const Education = ({ formData, setFormData }) => {
  // edu1_school: "",
  //   edu1_year: "",
  //   edu1_qualification: "",
  //   edu1_desc: "",
  //   edu2_school: "",
  //   edu2_year: "",
  //   edu2_qualification: "",
  //   edu2_desc: "",
  return (
    <div className="container">
    <div className="formWrapper">
      <form className="row g-3">
        <div className="col-md-9">
          <label for="name" className="form-label">
            Collage
          </label>
          <input
          placeholder="e.g. Cairo University"
            type="text"
            className="form-control"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-4">
          <label for="Email" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="Email"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
          
        </div>
        <div className="col-md-4">
          <label for="Email" className="form-label">
            End Date
          </label>

          <input
            type="date"
            className="form-control"
            id="Email"
            value={formData.edu1_year2}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year2: e.target.value });
            }}
          />
          </div>
        <div className="col-md-5">
          <label for="phone" className="form-label" >
            Degree 
          </label>
          <input
          placeholder="e.g. Bachelor of Science"
            type="text"
            className="form-control"
            id="phone"
            value={formData.edu1_qualificatin}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualificatin: e.target.value });
            }}
          />
        </div>

        <div className="col-9">
          <label for="edu1_desc" className="form-label">
            Description
          </label>
          
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>
        <hr />
        <div className="col-md-9">
          <label for="name" className="form-label">
          Collage
          </label>
          <input
            type="text"
            placeholder="e.g. Cairo University"
            className="form-control"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="col-md-4">
          <label for="Email" className="form-label">
                Start Date  
           </label>
          <input
            type="date"
            className="form-control"
            id="Email"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="col-md-4">
        <label for="Email" className="form-label">
             End Date       
         </label>
        <input
          type="date"
          className="form-control"
          id="Email"
          value={formData.edu2_year2}
          onChange={(e) => {
            setFormData({ ...formData, edu2_year2: e.target.value });
          }}
        />
        </div>
        <div className="col-md-5">
          <label for="phone" className="form-label">
            Degree
          </label>
          <input
            type="text"
            placeholder="e.g. Bachelor of Science"
            className="form-control"
            id="phone"
            value={formData.edu2_qualificatin}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualificatin: e.target.value });
            }}
          />
        </div>

        <div className="col-9">
          <label for="edu1_desc" className="form-label">
            Description
          </label>
          <input
            type="message"
            className="form-control"
            id="message"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default Education;