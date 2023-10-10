import React, { useState } from 'react';

const Extras = ({ formData, setFormData }) => {
  const [extraFields, setExtraFields] = useState([]);

  const addExtraField = () => {
    setExtraFields([...extraFields, '']); 
  };

  const handleExtraFieldChange = (index, value) => {
    const updatedExtraFields = [...extraFields];
    updatedExtraFields[index] = value;
    setExtraFields(updatedExtraFields);
  };

  const deleteExtraField = (index) => {
    const updatedExtraFields = [...extraFields];
    updatedExtraFields.splice(index, 1); 
    setExtraFields(updatedExtraFields);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="formWrapperex">
        <form className="row g-5">
          <div className="col-md-12">
            <label htmlFor="name" className="form-label">
              Language
            </label>
            <input
              type="text"
              placeholder="e.g. English"
              className="form-control"
              id="name"
              value={formData.extra_1}
              onChange={(e) => {
                setFormData({ ...formData, extra_1: e.target.value });
              }}
            />
          </div>
          
          {extraFields.map((field, index) => (
            <div key={index} className="col-md-12">
              <label htmlFor={`extra_${index + 2}`} className="form-label">
                Language {index + 2}
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id={`extra_${index + 2}`}
                  value={field}
                  onChange={(e) => {
                    handleExtraFieldChange(index, e.target.value);
                  }}
                />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    deleteExtraField(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          
          <div className="col-md-12">
            <button type="button" className="button" onClick={addExtraField}>
              Add another Language
            </button>
          </div>

          <hr />
          <div className="col-md-12">
            <label htmlFor="name" className="form-label">
              Hobby
            </label>
            <input
              placeholder="e.g. Drawing"
              type="text"
              className="form-control"
              id="name"
              value={formData.extra_2}
              onChange={(e) => {
                setFormData({ ...formData, extra_2: e.target.value });
              }}
            />
          </div>

        </form>
      </div>
    </div>
  );
};

export default Extras;
