import React from 'react'
import { FaLinkedin ,FaGithub,FaPhone} from "react-icons/fa6";

const PersonalDetails = ({formData,setFormData}) => {
  // name: "",
  // email: "",
  // phone: "",
  // linkedin: "",
  // github: "",
  // skills: "",
  return (
    <div className="container d-flex justify-content-center">
    <div className="formWrapper">
    <form className="row g-3">
    <div className="col-md-5">
      <label for="name" className="form-label">Name</label>
      <input type="text" className="form-control" id="name" value={formData.name} onChange={(e)=>{
        setFormData({... formData,name:e.target.value})
      }}/>
    </div>
    <div className="col-md-5">
      <label for="Email" className="form-label" >Email address</label>
      <input type="email" className="form-control" id="Email" value={formData.email} onChange={(e)=>{
        setFormData({... formData,email:e.target.value} )
      }}/>
    </div>
    <div className="col-md-5">
    <label for="Phone" className="form-label">Phone number</label>
    <input type="text" className="form-control" id="phone" value={formData.phone} onChange={(e)=>{
      setFormData({... formData,phone: e.target.value})
    }}/>
  </div>
    <div className="col-9">
      <label for="github" className="form-label">Github <FaGithub/></label>
      <input type="text" className="form-control" id="github" placeholder="https://github/YOURUSERNAME" value={formData.github} onChange={(e)=>{
        setFormData({... formData,github:e.target.value})
      }}/>
    </div>
    <div className="col-9">
      <label for="LinkedIn" className="form-label">LinkedIn <FaLinkedin/></label>
      <input type="text" className="form-control" id="LinkedIn" placeholder="https://LinkedIn/YOURUSERNAME" value={formData.linkedin} onChange={(e)=>{
        setFormData({... formData,linkedin:e.target.value} )
      }} />
    </div>
    <div className="col-9">
      <label for="Skills" className="form-label">Skills</label>
      <input type="text" className="form-control" id="Skills" placeholder="e.g. Microsoft Word" value={formData.skills} onChange={(e)=>{
        setFormData({... formData,skills:e.target.value})
      }}/>
    </div>
  </form>
  </div>
  </div>
  )
}

export default PersonalDetails