import Head from "next/head";


export default function Home() {
  return (
    <>
      
      <div className="main-content-dashbard">
  <div className="udashboard p-2">
    <section className="aid-header d-flex align-items-center">
      <div className="aid-header-container d-flex p-2 align-items-center">
        <div className="aid-sidebar aid-header-left-sidebar p-2">
          <span className="clearpointer">
            <img src="./assets/sidebar-icon.png" />
          </span>
        </div>
        <div className="aid-header-right-content d-flex p-2 align-items-center justify-content-between">
          <a href="/">
            <img src="./assets/Logo.png" />
          </a>
          <div className="content-step d-flex">
            <span className="step-single current-step">1</span>
            <div className="step-process">
              <span className="complete-process" />
            </div>
            <span className="step-single">2</span>
            <div className="step-process" />
            <span className="step-single">3</span>
            <div className="step-process" />
            <span className="step-single">4</span>
          </div>
        </div>
      </div>
    </section>
    <section className="aid-main">
      <div className="aid-main-container d-flex p-2">
        <div className="aid-sidebar aid-main-left-sidebar p-2">
          <ul className="m-0 p-0">
            <li className="active">
              <a href="#">
                <svg
                  width={31}
                  height={29}
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7264 3.69287L5.22465 11.8595L4.6069 24.1095L7.69566 26.4429H24.375L26.846 25.2762V11.2762L15.7264 3.69287Z"
                    stroke="#A7A8AB"
                  />
                  <path
                    d="M4.6069 11.276L15.7264 3.10938L26.846 11.276V24.1094C26.846 24.7282 26.5856 25.3217 26.1222 25.7593C25.6588 26.1969 25.0303 26.4427 24.375 26.4427H7.07791C6.42256 26.4427 5.79405 26.1969 5.33064 25.7593C4.86724 25.3217 4.6069 24.7282 4.6069 24.1094V11.276Z"
                    stroke="#A7A8AB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0199 22.9428V14.7761H19.433V22.9428"
                    stroke="#A7A8AB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width={31}
                  height={29}
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7265 3.10913L3.37146 8.94246L15.7265 14.7758L28.0815 8.94246L15.7265 3.10913Z"
                    stroke="#A7A8AB"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.37146 20.6091L15.7265 26.4425L28.0815 20.6091"
                    stroke="#A7A8AB"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.37146 14.7759L15.7265 20.6092L28.0815 14.7759"
                    stroke="#A7A8AB"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width={31}
                  height={29}
                  viewBox="0 0 31 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.2327 9.74042V13.1949H18.2359C17.3281 13.1949 16.5675 13.9051 16.5675 14.7759V18.3303C16.5675 19.2011 17.3281 19.9113 18.2359 19.9113H27.2327V23.3658C27.2327 23.8078 26.8741 24.1544 26.3916 24.1544H5.06133C4.57889 24.1544 4.22029 23.8078 4.22029 23.3658V8.69118C4.56869 8.85612 4.96086 8.95181 5.37502 8.95181H5.3751C10.1949 8.94777 15.3931 8.94924 20.1384 8.95058C22.3491 8.95121 24.4616 8.95181 26.3916 8.95181C26.8741 8.95181 27.2327 9.29843 27.2327 9.74042ZM18.2357 14.5797H18.2359H27.2327V18.5265H18.2359C18.1658 18.5265 18.113 18.5037 18.0785 18.4711C18.0444 18.4389 18.0222 18.3918 18.0222 18.3303V14.7759C18.0222 14.7144 18.0444 14.6672 18.0785 14.6349C18.113 14.6024 18.1658 14.5795 18.2357 14.5797ZM5.37502 4.01255C3.94589 4.01255 2.76557 5.1191 2.76557 6.48218V23.3658C2.76557 24.5648 3.80598 25.5392 5.06133 25.5392H26.3916C27.647 25.5392 28.6874 24.5648 28.6874 23.3658V9.74042C28.6874 8.54144 27.647 7.56699 26.3916 7.56699H24.9232V4.70496C24.9232 4.33422 24.5741 4.01258 24.1959 4.01255H5.37502ZM5.37502 5.39736H23.4685V7.56699H5.37502C4.7188 7.56699 4.22029 7.08826 4.22029 6.48218C4.22029 5.87609 4.7188 5.39736 5.37502 5.39736ZM21.3727 15.2683C20.63 15.2683 20.018 15.8382 20.018 16.5531C20.018 17.268 20.63 17.8379 21.3727 17.8379C22.1154 17.8379 22.7275 17.268 22.7275 16.5531C22.7275 15.8382 22.1154 15.2683 21.3727 15.2683Z"
                    fill="#A7A8AB"
                    stroke="#A7A8AB"
                    strokeWidth="0.2"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="aid-main-right-content p-4 green-card">
          <div className="step-content h-100">
            <div className="content-row h-100">
              <form className="d-flex flex-column justify-content-between h-100">
                <div className="row form-conatent-section">
                  <div className="left-form col-sm-5">
                    <div className="upload-form-control dark-card d-flex flex-column justify-content-center align-items-center">
                      <label
                        htmlFor="aiMediaUpload"
                        id="dropContainer"
                        className=" text-center d-flex flex-column justify-content-center align-items-center"
                      >
                        <img src="./assets/uploadicon.svg" />
                        <div className="upload-text">
                          <p className="m-0">
                            Choose a file or drag &amp; drop it here
                          </p>
                          <span>
                            JPEG, PNG, PDG, and MP4 formats, up to 50MB
                          </span>
                        </div>
                        <div>
                          <span className="browse-btn">Browse File</span>
                        </div>
                        <input
                          type="file"
                          id="aiMediaUpload"
                          className="d-none"
                          accept="image/jpeg, image/png"
                          multiple=""
                        />
                      </label>
                    </div>
                    {/* Preview Container */}
                    <div
                      id="imagePreviewContainer"
                      className="preview-container mt-4"
                    >
                      <h5>Image Previews:</h5>
                      <div
                        id="previewList"
                        className="d-flex flex-wrap gap-3"
                      />
                    </div>
                  </div>
                  <div className="right-form col-sm-7">
                    {/* Title Field */}
                    <div className="mb-4">
                      <label htmlFor="title" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="title"
                        placeholder="Enter the title"
                      />
                    </div>
                    {/* Keywords Field */}
                    <div className="mb-4">
                      <label htmlFor="keywords" className="form-label">
                        Keywords
                      </label>
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="keywords"
                        placeholder="Enter keywords"
                      />
                    </div>
                    {/* Description Field */}
                    <div className="mb-4">
                      <label htmlFor="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control custom-input"
                        id="description"
                        rows={4}
                        placeholder="Enter description"
                        defaultValue={""}
                      />
                    </div>
                    {/* Language Select */}
                    <div className="mb-4">
                      <label htmlFor="language" className="form-label">
                        Language
                      </label>
                      <select
                        className="form-select custom-input mb-4"
                        id="language"
                      >
                        <option value="" disabled="" selected="">
                          Select language
                        </option>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    {/* Tone Select */}
                    <div className="mb-4">
                      <label htmlFor="tone" className="form-label">
                        Tone
                      </label>
                      <select className="form-select custom-input" id="tone">
                        <option value="" disabled="" selected="">
                          Select tone
                        </option>
                        <option value="formal">Formal</option>
                        <option value="casual">Casual</option>
                        <option value="professional">Professional</option>
                        <option value="friendly">Friendly</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-action-section action d-flex align-items-center justify-content-end">
                  {/* Next Button */}
                  <a href="/get-started-page2" className="btn btn-custom">
                    Next
                    {/* <button type="submit" class="btn btn-custom">Next</button> */}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  {/* Styling */}
</div>

    </>
  );
}

