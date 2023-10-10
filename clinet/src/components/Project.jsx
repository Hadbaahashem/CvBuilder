import React from 'react'

const Project = ({ formData, setFormData }) => {
  return (
    <div className="container">
    <div className="formWrapper">
    <form className="row g-4">
      <div className="col-md-5">
        <label for="name" className="form-label">
          Project Name
        </label>
        <input
        placeholder='e.g. Messenger'
          type="text"
          className="form-control"
          id="name"
          value={formData.proj1_title}
          onChange={(e) => {
            setFormData({ ...formData, proj1_title: e.target.value });
          }}
        />
      </div>

      <div className="col-md-5">
        <label for="phone" className="form-label">
          Project Link
        </label>
        <input
          type="text"
          placeholder='https://github.com/yourusername/projectname.git'
          className="form-control"
          id="phone"
          value={formData.proj1_link}
          onChange={(e) => {
            setFormData({ ...formData, proj1_link: e.target.value });
          }}
        />
      </div>
      <div className="col-10">
        <label for="edu1_desc" className="form-label">
          Description about project
        </label>
        <input
          type="text"
          className="form-control"
          id="github"
          value={formData.proj1_desc}
          onChange={(e) => {
            setFormData({ ...formData, proj1_desc: e.target.value });
          }}
        />
      </div>
      <hr />
      <div className="col-md-5">
        <label for="name" className="form-label">
             Project Name    
                 </label>
        <input
        placeholder='e.g. clinic'
          type="text"
          className="form-control"
          id="name"
          value={formData.proj2_title}
          onChange={(e) => {
            setFormData({ ...formData, proj2_title: e.target.value });
          }}
        />
      </div>
      <div className="col-md-5">
        <label for="Email" className="form-label">
        Project Link
        </label>
        <input
          type="email"
          placeholder='https://github.com/yourusername/projectname.git'
          className="form-control"
          id="Email"
          value={formData.proj2_link}
          onChange={(e) => {
            setFormData({ ...formData, proj2_link: e.target.value });
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
          value={formData.proj2_desc}
          onChange={(e) => {
            setFormData({ ...formData, proj2_desc: e.target.value });
          }}
        />
      </div>
    </form>
    </div>
  </div>
  )
}

export default Project