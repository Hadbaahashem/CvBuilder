import React from "react";

const Experiences = ({ formData, setFormData }) => {
  // exp1_org: "",
  //   exp1_pos: "",
  //   exp1_desc: "",
  //   exp1_dur: "",
  //   exp2_org: "",
  //   exp2_pos: "",
  //   exp2_des: "",
  //   exp2_dur: "",
  return (
    <div className="container">
    <div className="formWrapperexp">
      <form className="row g-5">
        <div className="col-md-5">
          <label for="name" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            placeholder="e.g. Front-end developer"
            className="form-control"
            id="name"
            value={formData.exp1_org}
            onChange={(e) => {
              setFormData({ ...formData, exp1_org: e.target.value });
            }}
          />
        </div>

        <div className="col-md-5">
          <label for="phone" className="form-label">
          Employer
          </label>
          <input
          placeholder="e.g. PwC"
            type="text"
            className="form-control"
            id="phone"
            value={formData.exp1_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp1_pos: e.target.value });
            }}
          />
        </div>
        <div className="col-md-5">
          <label for="Email" className="form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="Email"
            value={formData.exp1_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp1_dur: e.target.value });
            }}
          />
        </div>
        <div className="col-md-5">
        <label for="Email" className="form-label">
                      End Date     
                         </label>
        <input
          type="date"
          className="form-control"
          id="Email"
          value={formData.exp1_dur2}
          onChange={(e) => {
            setFormData({ ...formData, exp1_dur2: e.target.value });
          }}
        />
      </div>
        <div className="col-10">
          <label for="edu1_desc" className="form-label">
           Description
          </label>
          <input
            type="text"
            className="form-control"
            id="github"
            value={formData.exp1_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp1_desc: e.target.value });
            }}
          />
        </div>
       
      </form>
      </div>
    </div>
  );
};

export default Experiences;