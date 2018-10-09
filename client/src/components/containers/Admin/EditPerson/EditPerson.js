import React, { Component } from "react";
import FbApp from "../../../../config/firebase";

const db = FbApp.firestore();
const storage = FbApp.storage();

db.settings({
  timestampsInSnapshots: true
});

class EditPerson extends Component {
  state = {
    person: this.props.person
  };

  changeHandler = e => {
    let name = e.target.name;
    let value = e.target.value;
    let group = e.target.getAttribute("group");

    //handling urls

    if (group === "url") {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          urls: { ...prevState.person.urls, [name]: value }
        }
      }));
      return null;
    }

    this.setState(prevState => ({
      person: { ...prevState.person, [name]: value }
    }));
  };

  imageHandler = e => {
    e.preventDefault();
  };

  uploadHandler = e => {
    e.preventDefault();
  };

  render() {
    const {
      name,
      occupation,
      business,
      location,
      category,
      started,
      urls,
      address,
      interview,
      imgURL,
      subImgURLs
    } = this.state.person;

    const images = [
      <div className="images-container" key={0}>
        <label htmlFor={imgURL}>
          <img src={imgURL} />
        </label>
        <input onChange={e => this.imageHandler(e)} id={imgURL} type="file" />
      </div>,
      ...subImgURLs.map((subImage, index) => {
        return (
          <div className="images-container" key={index + 1}>
            <label htmlFor={subImage}>
              <img src={subImage} />;
            </label>
            <input
              onChange={e => this.imageHandler(e)}
              id={subImage}
              type="file"
            />
          </div>
        );
      })
    ];

    console.log(this.state);

    return (
      <React.Fragment>
        <div>Editing this</div>
        <div className="images">{images}</div>
        <div className="profile-box-container">
          <div className="profile-box">
            <form onSubmit={e => this.uploadHandler(e)} action="POST">
              <h5>name</h5>
              <input
                spellCheck="false"
                value={name}
                onChange={e => this.changeHandler(e)}
                name="name"
                type="text"
              />
              <h5>occupation</h5>
              <input
                spellCheck="false"
                value={occupation}
                onChange={e => this.changeHandler(e)}
                name="occupation"
                type="text"
              />
              <h5>business</h5>
              <input
                spellCheck="false"
                value={business}
                onChange={e => this.changeHandler(e)}
                name="business"
                type="text"
              />
              <h5>location</h5>
              <input
                spellCheck="false"
                value={location}
                onChange={e => this.changeHandler(e)}
                name="location"
                type="text"
              />
              <h5>category</h5>
              <input
                spellCheck="false"
                value={category}
                onChange={e => this.changeHandler(e)}
                name="category"
                type="text"
              />
              <h5>started</h5>
              <input
                spellCheck="false"
                value={started}
                onChange={e => this.changeHandler(e)}
                name="started"
                type="date"
              />
              <h5>Website URL</h5>
              <input
                spellCheck="false"
                value={urls.website}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="website"
                type="url"
              />
              <h5>Facebook URL</h5>
              <input
                spellCheck="false"
                value={urls.facebook}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="facebook"
                type="url"
              />
              <h5>Instagram URL</h5>
              <input
                spellCheck="false"
                value={urls.instagram}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="instagram"
                type="url"
              />
              <h5>Youtube URL</h5>
              <input
                spellCheck="false"
                value={urls.youtube}
                group="url"
                onChange={e => this.changeHandler(e)}
                name="youtube"
                type="url"
              />
              <h5>address</h5>
              <input
                spellCheck="false"
                value={address}
                onChange={e => this.changeHandler(e)}
                name="address"
                type="text"
              />
              <h5>interview</h5>
              <textarea
                spellCheck="false"
                value={interview}
                onChange={e => this.changeHandler(e)}
                name="interview"
                cols="30"
                rows="10"
              />
              <button>Edit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EditPerson;
