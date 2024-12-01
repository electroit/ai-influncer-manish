import { GetAllAvatarData } from "@/api-service/get-all-personas";
import Avatar from "@/components/avatar";

export default async function Home() {
  const data = await GetAllAvatarData();
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
                  <span className="step-single current-step">
                    <a href="/get-started">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 40 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="19.7156"
                          cy="19.3177"
                          r="19.3177"
                          fill="#00000030"
                          fillOpacity="0.7"
                        />
                        <path
                          d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                          stroke="#1E686A"
                          strokeWidth="3.1326"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </span>
                  <div className="step-process done" />
                  <span className="step-single current-step">
                    <a href="/get-started-step2">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 40 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="19.7156"
                          cy="19.3177"
                          r="19.3177"
                          fill="#00000030"
                          fillOpacity="0.7"
                        />
                        <path
                          d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                          stroke="#1E686A"
                          strokeWidth="3.1326"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                  </span>
                  <div className="step-process done" />
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
                    <a href="/get-started">
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
                        <div className="w-100">
                          <div className="d-flex justify-content-between align-items-center pb-3">
                            <h2>Choose Avatar</h2>
                          </div>
                          <div className="dark-card card-border d-flex flex-column justify-content-center align-items-center mb-4">
                            <div className="avatarslist d-flex align-items-center flex-wrap">
                                <Avatar data={data} />
                            </div>
                          </div>
                        </div>
                        <div className="w-100">
                          <div className="d-flex justify-content-start align-items-center pb-3">
                            <h2>Choose Tons</h2>
                            <a href="#" className="mx-2 viewlink">
                              View All Tones
                            </a>
                          </div>
                          <div className="dark-card card-border tone-list-wrap d-flex flex-column justify-content-start align-items-center mb-4">
                            <div className="tonslist d-flex align-items-center flex-wrap w-100">
                              <label
                                htmlFor="tons-single-1"
                                className="tons-single d-flex p-3 justify-content-center align-items-center"
                              >
                                <div className="tone">
                                  <div
                                    id="player-container-1"
                                    className="player-box player-box-1"
                                  >
                                    <audio id="track-1">
                                      <source
                                        src="https://cldup.com/qR72ozoaiQ.mp3"
                                        type="audio/mpeg"
                                      />
                                    </audio>
                                    <div id="play-paus-1" className="play" />
                                  </div>
                                </div>
                                <div className="h-100 w-100 tons-content d-flex flex-column justify-content-between p-0">
                                  <div className="tone-name">Breanna</div>
                                  <div className="tone-details">
                                    Female | Australian accent
                                  </div>
                                </div>
                                <div className="tone-check">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="19.7156"
                                      cy="19.3177"
                                      r="19.3177"
                                      fill="#00000030"
                                      fillOpacity="0.7"
                                    />
                                    <path
                                      d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                                      stroke="#1E686A"
                                      strokeWidth="3.1326"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="radio"
                                  name="tons-single"
                                  id="tons-single-1"
                                />
                              </label>
                              <label
                                htmlFor="tons-single-2"
                                className="tons-single d-flex p-3 justify-content-center align-items-center"
                              >
                                <div className="tone">
                                  <div
                                    id="player-container-2"
                                    className="player-box player-box-2"
                                  >
                                    <audio id="track-2">
                                      <source
                                        src="https://orarum.com/agestas/music/song.mp3"
                                        type="audio/mpeg"
                                      />
                                    </audio>
                                    <div id="play-paus-2" className="play" />
                                  </div>
                                </div>
                                <div className="h-100 w-100 tons-content d-flex flex-column justify-content-between p-0">
                                  <div className="tone-name">Jora Slobod</div>
                                  <div className="tone-details">
                                    Male | adult,Romanian accent
                                  </div>
                                </div>
                                <div className="tone-check">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="19.7156"
                                      cy="19.3177"
                                      r="19.3177"
                                      fill="#00000030"
                                      fillOpacity="0.7"
                                    />
                                    <path
                                      d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                                      stroke="#1E686A"
                                      strokeWidth="3.1326"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="radio"
                                  name="tons-single"
                                  id="tons-single-2"
                                />
                              </label>
                              <label
                                htmlFor="tons-single-3"
                                className="tons-single  d-flex p-3 justify-content-center align-items-center"
                              >
                                <div className="tone">
                                  <div
                                    id="player-container-3"
                                    className="player-box player-box-3"
                                  >
                                    <audio id="track-3">
                                      <source
                                        src="https://orarum.com/agestas/music/song.mp3"
                                        type="audio/mpeg"
                                      />
                                    </audio>
                                    <div id="play-paus-3" className="play" />
                                  </div>
                                </div>
                                <div className="h-100 w-100 tons-content d-flex flex-column justify-content-between p-0">
                                  <div className="tone-name">
                                    Juliana Barbieri
                                  </div>
                                  <div className="tone-details">
                                    Female | adult,Portugese accent
                                  </div>
                                </div>
                                <div className="tone-check">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="19.7156"
                                      cy="19.3177"
                                      r="19.3177"
                                      fill="#00000030"
                                      fillOpacity="0.7"
                                    />
                                    <path
                                      d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                                      stroke="#1E686A"
                                      strokeWidth="3.1326"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="radio"
                                  name="tons-single"
                                  id="tons-single-3"
                                />
                              </label>
                              <label
                                htmlFor="tons-single-4"
                                className="tons-single  d-flex p-3 justify-content-center align-items-center"
                              >
                                <div className="tone">
                                  <div
                                    id="player-container-3"
                                    className="player-box player-box-3"
                                  >
                                    <audio id="track-3">
                                      <source
                                        src="https://orarum.com/agestas/music/song.mp3"
                                        type="audio/mpeg"
                                      />
                                    </audio>
                                    <div id="play-paus-3" className="play" />
                                  </div>
                                </div>
                                <div className="h-100 w-100 tons-content d-flex flex-column justify-content-between p-0">
                                  <div className="tone-name">Julian</div>
                                  <div className="tone-details">
                                    Male | Adult,Bulgarian accent
                                  </div>
                                </div>
                                <div className="tone-check">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="19.7156"
                                      cy="19.3177"
                                      r="19.3177"
                                      fill="#00000030"
                                      fillOpacity="0.7"
                                    />
                                    <path
                                      d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                                      stroke="#1E686A"
                                      strokeWidth="3.1326"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="radio"
                                  name="tons-single"
                                  id="tons-single-4"
                                />
                              </label>
                              <label
                                htmlFor="tons-single-5"
                                className="tons-single  d-flex p-3 justify-content-center align-items-center"
                              >
                                <div className="tone">
                                  <div
                                    id="player-container-3"
                                    className="player-box player-box-3"
                                  >
                                    <audio id="track-3">
                                      <source
                                        src="https://orarum.com/agestas/music/song.mp3"
                                        type="audio/mpeg"
                                      />
                                    </audio>
                                    <div id="play-paus-3" className="play" />
                                  </div>
                                </div>
                                <div className="h-100 w-100 tons-content d-flex flex-column justify-content-between p-0">
                                  <div className="tone-name">Johannes</div>
                                  <div className="tone-details">
                                    Male | Adult,Norweigian accent
                                  </div>
                                </div>
                                <div className="tone-check">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="19.7156"
                                      cy="19.3177"
                                      r="19.3177"
                                      fill="#00000030"
                                      fillOpacity="0.7"
                                    />
                                    <path
                                      d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                                      stroke="#1E686A"
                                      strokeWidth="3.1326"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="radio"
                                  name="tons-single"
                                  id="tons-single-5"
                                />
                              </label>
                              <label
                                htmlFor="tons-single-6"
                                className="tons-single  d-flex p-3 justify-content-center align-items-center"
                              >
                                <div className="tone">
                                  <div
                                    id="player-container-3"
                                    className="player-box player-box-3"
                                  >
                                    <audio id="track-3">
                                      <source
                                        src="https://orarum.com/agestas/music/song.mp3"
                                        type="audio/mpeg"
                                      />
                                    </audio>
                                    <div id="play-paus-3" className="play" />
                                  </div>
                                </div>
                                <div className="h-100 w-100 tons-content d-flex flex-column justify-content-between p-0">
                                  <div className="tone-name">Juan Carlos</div>
                                  <div className="tone-details">
                                    Male | Adult,Spanish accent
                                  </div>
                                </div>
                                <div className="tone-check">
                                  <svg
                                    width={30}
                                    height={30}
                                    viewBox="0 0 40 39"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="19.7156"
                                      cy="19.3177"
                                      r="19.3177"
                                      fill="#00000030"
                                      fillOpacity="0.7"
                                    />
                                    <path
                                      d="M12.9282 19.3175L17.8012 24.0164L27.547 14.6187"
                                      stroke="#1E686A"
                                      strokeWidth="3.1326"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                </div>
                                <input
                                  type="radio"
                                  name="tons-single"
                                  id="tons-single-6"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-action-section action d-flex align-items-center justify-content-end">
                        {/* Next Button */}
                        <a href="/get-started-page4" className="btn btn-custom">
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
      </div>

      <script>
        {`document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.tons-single'); // Select all labels with the 'tons-single' class

    labels.forEach((label) => {
        const audioElement = label.querySelector('audio'); // Get the audio element inside the label
        const playButton = label.querySelector('[id^="play-paus-"]'); // Correctly select the play/pause button by its ID pattern

        // Proceed only if both audio and playButton exist
        if (audioElement && playButton) {
            // Play/Pause functionality for the current audio
            function playPause() {
                // Pause all other audio tracks before playing the current one
                labels.forEach((otherLabel) => {
                    const otherAudio = otherLabel.querySelector('audio');
                    const otherButton = otherLabel.querySelector('[id^="play-paus-"]');

                    if (otherAudio && otherButton && otherAudio !== audioElement) {
                        otherAudio.pause();
                        otherButton.className = 'play'; // Reset other play buttons to "play"
                    }
                });

                // Toggle play/pause for the current audio
                if (audioElement.paused) {
                    audioElement.play();
                    playButton.className = 'pause'; // Change button to "pause" state
                } else {
                    audioElement.pause();
                    playButton.className = 'play'; // Change button back to "play" state
                }
            }

            // Add event listener to the play/pause button
            playButton.addEventListener('click', playPause);

            // Reset the play button to "play" when the audio finishes
            audioElement.addEventListener('ended', () => {
                playButton.className = 'play';
            });
        }
    });
});
`}
      </script>
    </>
  );
}
