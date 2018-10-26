import React from "react";

const AddOpenings = props => {
  return (
    <div>
      <form>
        <h5>Business Catagory</h5>
        <input
          spellCheck="false"
          //value={category}
          name="category"
          type="text"
        />
        <h5>Registration Date</h5>
        <input
          spellCheck="false"
          //value={registration}
          name="registration"
          type="date"
        />
        <h5>Business Name</h5>
        <input
          spellCheck="false"
          //value={name}
          name="name"
          type="text"
        />
        <h5>Location(new system)</h5>
        <input
          spellCheck="false"
          //value={newLocation}
          name="newLocation"
          type="text"
        />
        <h5>Location(old system)</h5>
        <input
          spellCheck="false"
          //value={oldLocation}
          name="oldLocation"
          type="text"
        />
        <h5>Area</h5>
        <input
          spellCheck="false"
          //value={area}
          name="area"
          type="text"
        />
        <h5>Telephone</h5>
        <input
          spellCheck="false"
          //value={telephone}
          name="telephone"
          type="text"
        />
        <h5>Opening Date</h5>
        <input
          spellCheck="false"
          //value={opening}
          name="opening"
          type="date"
        />
        <h5>Zipcode(new system)</h5>
        <input
          spellCheck="false"
          //value={newZipcode}
          name="newZipcode"
          type="text"
        />
        <h5>Zipcode(old system)</h5>
        <input
          spellCheck="false"
          //value={oldZipcode}
          name="oldZipcode"
          type="text"
        />
        <h5>Construction date</h5>
        <input
          spellCheck="false"
          //value={construction}
          name="construction"
          type="date"
        />
        <h5>Type</h5>
        <input
          spellCheck="false"
          //value={type}
          name="type"
          type="text"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddOpenings;
