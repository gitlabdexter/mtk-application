return (
  <div className="productList">
    <div className="productCard">
      <img
        src={image}
        alt={`${name} app`}
        className="productImage"
      />

      <div className="productCard__content">
        <h3 className="productName">{name}</h3>

        <div className="displayStack__1">
          <select className="productPrice">
            {description.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div className="productRating">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>

        <div className="displayStack__2">
          <button
            className="productTime"
            onClick={handleDownload}
          >
            DOWNLOAD
          </button>

          {/* Add this line */}
          <p className="time-left">{timeLeft} days left</p>

          <p className="download-text">
            Client Downloads: {downloads}
          </p>
        </div>
      </div>
    </div>
  </div>
);
