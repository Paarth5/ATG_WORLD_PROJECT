import React from "react";
function Card(props) {
  return (
    <div className="card-cont">
      <div className="card-images-cont">
        {props.imageurl && (
          <img src={props.imageurl} alt="Post" className="card-photo" />
        )}
        {props.iconurl && (
          <img
            src={props.iconurl}
            alt="Post-Category-icon"
            className="card-icon"
          />
        )}
      </div>
      <div className="card-head-cont">
        <p className="card-head">{props.head}</p>
        <div class="dropdown">
          <button
            className="card-more-btn "
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="/assets/images/morebtn.svg" alt="more options" />
          </button>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Edit
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Report
              </a>
            </li>
          </ul>
        </div>
      </div>

      {props.subhead ? (
        <p className="card-subhead">{props.subhead}</p>
      ) : (
        <div className="event-details-cont">
          {props.date ? (
            <div className="event-details">
              <img src="/assets/images/date.svg" alt="date icon" />
              <p className="event-info">{props.date}</p>
            </div>
          ) : (
            <div className="event-details">
              <img src="/assets/images/company.svg" alt="company icon" />
              <p className="event-info">{props.company}</p>
            </div>
          )}
          <div className="event-details">
            <img src=".\assets\images\location.svg" alt="location icon" />
            <p className="event-info">{props.location}</p>
          </div>
        </div>
      )}

      {props.btn && (
        <div className="card-btn-cont">
          <button
            className={
              props.type === "job" ? "card-btn job-btn" : "card-btn event-btn"
            }
          >
            {props.btn}
          </button>
        </div>
      )}

      <div className="author-cont">
        <div className="author-details">
          <img src=".\assets\images\author.jpg" alt="Author" />
          <p className="author-name">{props.author}</p>
        </div>
        <div className="card-stats">
          <img
            src=".\assets\images\views.svg"
            alt="Views"
            className="card-views-icon"
          />
          <p className="card-views">1.4k views</p>
          <button className="share-btn">
            <img src=".\assets\images\share.svg" alt="Share" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
