// Create a class for the element
class RegisterWindow extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');
    wrapper.innerHTML = `
  <div class="form_container" id="layout">
      <div id="page">
        <div id="flash-message"></div>

        <section class="form" id="page-content">
          <h2 class="title">WELCOME</h2>
          <form
            novalidate="novalidate"
            class="formtastic user"
            id="new_user"
            action="https://www.13bets.io/users"
            accept-charset="UTF-8"
            method="post"
          >
            <input name="utf8" type="hidden" value="&#x2713;" /><input
              type="hidden"
              name="authenticity_token"
              value="ti2WYVG8A2cCg1YhmaE/G1qDA18Ux4bGZ4p8Y65Uou76+verdTg8SninCsTXF2ZBe0/T2nxqtDK8Bu/0uzg4eA=="
            />
            <fieldset class="inputs">
              <ol>
                <li
                  class="email input error required stringish"
                  id="user_email_input"
                >
                  <!-- <label for="user_email" class="label"
                    >Email<abbr title="required">*</abbr></label
                  > -->
                  <input
                    maxlength="255"
                    id="user_email"
                    class="-metrika-nokeys"
                    type="email"
                    value=""
                    name="user[email]"
                    placeholder="E-mail*"
                  />
                  <p class="input_error">can't be blank and is invalid</p>
                </li>
                <li
                  class="password input error required stringish"
                  id="user_password_input"
                >
                  <!-- <label for="user_password" class="label"
                    >Password<abbr title="required">*</abbr></label
                  > -->
                  <input
                    maxlength="128"
                    id="user_password"
                    class="-metrika-nokeys"
                    type="password"
                    name="user[password]"
                    name="user[password_confirmation]"
                    placeholder="Password*"
                  />
                  <p class="input_error">can't be blank</p>
                </li>
                <li
                  class="password input optional stringish"
                  id="user_password_confirmation_input"
                >
                  <!-- <label for="user_password_confirmation" class="label"
                    >Password confirmation</label
                  > -->
                  <!-- <input
                    id="user_password_confirmation"
                    class="-metrika-nokeys"
                    type="password"
                    name="user[password_confirmation]"
                    placeholder="Password confirmation"
                  /> -->
                </li>
              </ol>
            </fieldset>
            <fieldset class="inputs">
              <ol>
                <li
                  class="country select input error required"
                  id="user_profile_attributes_country_input"
                >
                  <!-- <label for="user_profile_attributes_country" class="label"
                    >Country<abbr title="required">*</abbr></label
                  > -->
                  <select
                    name="user[profile_attributes][country]"
                    id="user_profile_attributes_country"
                    class="-metrika-nokeys"
                  >
                    <option value="" disabled selected>Country*</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="CV">Cabo Verde</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">
                      Congo, The Democratic Republic of the
                    </option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="HR">Croatia</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czechia</option>
                    <option value="CI">Côte d&#39;Ivoire</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="SZ">Eswatini</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">
                      Heard Island and McDonald Islands
                    </option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">
                      Lao People&#39;s Democratic Republic
                    </option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MK">North Macedonia</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestine, State of</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">
                      Saint Helena, Ascension and Tristan da Cunha
                    </option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch Part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="SS">South Sudan</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">
                      Venezuela, Bolivarian Republic of
                    </option>
                    <option value="VN">Vietnam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                    <option value="AX">Åland Islands</option>
                  </select>
                  <p class="input_error">can't be blank</p>
                </li>
                <li
                  class="select input required"
                  id="user_profile_attributes_currency_input"
                >
                  <!-- <label for="user_profile_attributes_currency" class="label"
                    >Currency<abbr title="required">*</abbr></label
                  > -->
                  <select
                    name="user[profile_attributes][currency]"
                    id="user_profile_attributes_currency"
                    class="-metrika-nokeys"
                  >
                    <option value=""></option>
                    <optgroup label="FIAT">
                      <option value="AUD">AUD - Australian Dollar</option>
                      <option value="BRL">BRL - Brazilian Real</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                      <option selected="selected" value="EUR">
                        EUR - Euro
                      </option>
                      <option value="NOK">NOK - Norwegian Krone</option>
                      <option value="NZD">NZD - New Zealand Dollar</option>
                      <option value="USD">USD - United States Dollar</option>
                    </optgroup>
                    <optgroup label="CRYPTO">
                      <option value="BCH">BCH - Bitcoin Cash</option>
                      <option value="BNB">BNB - Binance Coin</option>
                      <option value="BTC">BTC - Bitcoin</option>
                      <option value="DOG">DOG - Dogecoin</option>
                      <option value="ETH">ETH - Ethereum</option>
                      <option value="LTC">LTC - Litecoin</option>
                      <option value="TRX">TRX - TRON</option>
                      <option value="USDC">USDC - USD Coin</option>
                      <option value="USDT">USDT - Tether</option>
                      <option value="XRP">XRP - Ripple</option>
                    </optgroup>
                  </select>

                  <p class="inline-hints info_text">
                    You can change currency at any stage after registration is
                    completed.
                  </p>
                </li>
                <li
                  class="boolean input optional"
                  id="user_profile_attributes_receive_promos_input"
                >
                  <input
                    type="hidden"
                    name="user[profile_attributes][receive_promos]"
                    value="0"
                  /><label for="user_profile_attributes_receive_promos" class=""
                    ><input
                      type="checkbox"
                      name="user[profile_attributes][receive_promos]"
                      id="user_profile_attributes_receive_promos"
                      value="1"
                      class="-metrika-nokeys"
                    />Receive Email Promos</label
                  >
                </li>
                <li
                  class="boolean input optional"
                  id="user_profile_attributes_receive_sms_promos_input"
                >
                  <input
                    type="hidden"
                    name="user[profile_attributes][receive_sms_promos]"
                    value="0"
                  /><label
                    for="user_profile_attributes_receive_sms_promos"
                    class=""
                    ><input
                      type="checkbox"
                      name="user[profile_attributes][receive_sms_promos]"
                      id="user_profile_attributes_receive_sms_promos"
                      value="1"
                      class="-metrika-nokeys"
                    />Receive SMS Promos</label
                  >
                </li>
                <li
                  class="boolean input error required"
                  id="user_profile_attributes_age_acceptance_input"
                >
                  <input
                    type="hidden"
                    name="user[profile_attributes][age_acceptance]"
                    value="0"
                  /><label for="user_profile_attributes_age_acceptance" class=""
                    ><input
                      type="checkbox"
                      name="user[profile_attributes][age_acceptance]"
                      id="user_profile_attributes_age_acceptance"
                      value="1"
                      class="-metrika-nokeys"
                    />I am over 18 years old*</label
                  >
                  <p class="input_error">must be accepted</p>
                </li>
                <li
                  class="boolean input error required"
                  id="user_profile_attributes_terms_acceptance_input"
                >
                  <input
                    type="hidden"
                    name="user[profile_attributes][terms_acceptance]"
                    value="0"
                  /><label
                    for="user_profile_attributes_terms_acceptance"
                    class=""
                    ><input
                      type="checkbox"
                      name="user[profile_attributes][terms_acceptance]"
                      id="user_profile_attributes_terms_acceptance"
                      value="1"
                      class="-metrika-nokeys"
                    />I agree to&nbsp;
                    <a class="text_link" href="https://www.13bets.io/terms-and-conditions">Terms and Conditions</a
                    >*</label
                  >
                  <p class="input_error">must be accepted</p>
                </li>
              </ol>
            </fieldset>
            <fieldset class="actions btn_actions">
              <ol>
                <li class="action input_action" id="user_submit_action">
                  <input
                    class="submit_btn submit_btn-disabled"
                    type="submit"
                    name="commit"
                    value="SIGN UP"
                    data-disable-with="Loading..."
                    disabled
                  />
                </li>
              </ol>
            </fieldset>
          </form>

          <div class="auth-links">
            <p class="text_small">Already have an account?</p>
            <a class="text_link" href="https://www.13bets.io/users/sign_in">Sign In</a>
          </div>
        </section>
      </div>
    </div>
    `;
    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    style.textContent = `
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      /* --min-width: 360px; */
      --min-width: 300px;
      --max-width: 402px;
      --color-main: #2B3446;
      --color-text: #B9C6D6;
      --color-text-highlight: #E49100;
      --color-element-bg: #FFB639;
    }
    body {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      /* height: 100vh; */
    }
    a, abbr {
      text-decoration: none;
      color: inherit;
    }
    ul, ol, fieldset {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    fieldset {
      border: 0;
    }
    input:not([type="checkbox"]), select {
      width: 100%;
      border: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }
    textarea:focus, input:focus {
      outline: none;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      color: var(--color-text);
      opacity: 1; /* Firefox */
    }
    select {
      -moz-appearance:none; /* Firefox */
      -webkit-appearance:none; /* Safari and Chrome */
      appearance:none;
    }
    select:focus {
      border: none;
      outline: none;
    }
    /* preset end */
    .form_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: var(--min-width);
      max-width: var(--max-width);
      background-color: var(--color-main);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      padding: 25px 50px;
      color: var(--color-text);
      font-family: 'Montserrat';
      font-style: normal;
    }
    .form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 6px;
    }
    .title {
      font-weight: 900;
      font-size: 28px;
      line-height: 34px;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 14px;
    }
    .email, .password, .country, .error {
      position: relative;
    }
    .email > .input_error, .password > .input_error, .country > .input_error {
      position: absolute;
      color: crimson;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.01em;
      margin: 0;
      padding: 0;
      bottom: -9px;
      left: 9px;
      opacity: 0;
    }
    #user_profile_attributes_age_acceptance_input > .input_error, #user_profile_attributes_terms_acceptance_input > .input_error {
      color: crimson;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.01em;
      margin: 0;
      padding: 0;
      opacity: 0;
    }
    .inputs > ol {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    input:not([type="checkbox"],[type="submit"]), select {
      height: 50px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      background: #1C2330;
      border-radius: 12px;
      padding: 0px 20px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      margin-bottom: 6px;
    }
    .text_small {
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: var(--color-text);
    }
    .text_link {
      font-weight: 700;
      background: linear-gradient(256.33deg, #FFB639 18.19%, #E49100 80.14%);
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
    }
    .text_link:hover {
      background: linear-gradient(256.33deg, #FFD644 18.19%, #FFBB0E 80.14%);
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    label {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.01em;
      color: var(--color-text);
    }
    input:not([type="checkbox"]):active {
      outline: none;
    }
    label > input[type="checkbox"] {
      margin-right: 9px;
      width: 20px;
      height: 20px;
    }
    input[type="checkbox"] {
      /* Add if not using autoprefixer */
      -webkit-appearance: none;
      /* Remove most all native input styles */
      appearance: none;
      /* For iOS < 15 */
      background-color: var(--color-main);
      /* Not removed via appearance */
      margin: 0;
      font: inherit;
      color: currentColor;
      width: 20px;
      height: 20px;
      border: 0.15em solid currentColor;
      border-radius: 0.15em;
      transform: translateY(-0.075em);
      display: grid;
      place-content: center;
    }
    input[type="checkbox"]::before {
      content: "";
      width: 12px;
      height: 12px;
      transform: scale(0);
      transition: 0.1s transform ease-in-out;
      box-shadow: inset 1em 1em var(--color-text);
      /* Windows High Contrast Mode */
      background-color: CanvasText;
    }
    input[type="checkbox"]:checked::before {
      transform: scale(1);
    }
    .info_text{
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: var(--color-text);
    }
    .submit_btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 14px 116px;
      gap: 10px;
      width: 302px;
      height: 50px;
      background: linear-gradient(256.33deg, #FFB639 18.19%, #E49100 80.14%);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.01em;
      color: #1D232C;
    }
    .submit_btn:hover {
      background: linear-gradient(256.33deg, #FFD644 18.19%, #FFBB0E 80.14%);
    }
    .submit_btn:active {
      background: linear-gradient(256.33deg, #FFB639 18.19%, #E49100 80.14%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      border: 1px solid #E49100;
    }
    .submit_btn-disabled {
      filter: grayscale(100%);
    }
    .submit_btn-disabled:hover {
      cursor: not-allowed;
    }
    .btn_actions {
      margin: 10px 0px;
    }
    .auth-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 9px;
      margin: 0 auto;
    }
    @media (max-width: 450px) {
      .form_container {
        padding: 9px 18px;
      }
      .title {
        font-size: 24px;
        line-height: 28px;
        margin-bottom: 6px;
      }
      input:not([type="checkbox"],[type="submit"]), select {
        height: 40px;
        font-size: 12px;
        line-height: 12px;
      }
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        font-size: 12px;
        line-height: 12px;
      }
      .info_text, .text_small {
        font-size: 11px;
        line-height: 13px;
      }
      .email > .input_error, .password > .input_error, .country > .input_error,#user_profile_attributes_age_acceptance_input > .input_error, #user_profile_attributes_terms_acceptance_input > .input_error {
        font-size: 10px;
      }
      label > input[type="checkbox"] {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
      .submit_btn {
        height: 40px;
      }
      .label {
        font-size: 11px;
      }
      .text_link {
        font-size: 12px;
      }
      .input_error {
        opacity: 0;
      }
    }`;
    // create some JS
    const script = document.createElement('script');
    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){3,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]{2,})+.+[a-zA-Z]{1,}))$/;
    script.textContent = `
    const validate = {
      email: false,
      password: false,
      country: false,
      age: false,
      terms: false,
    };
    const htmlRefs = {
      email: '.email > .input_error',
      password: '.password > .input_error',
      country: '.country > .input_error',
      age: '#user_profile_attributes_age_acceptance_input > .input_error',
      terms: '#user_profile_attributes_terms_acceptance_input > .input_error',
    };
    const btn = document.querySelector('register-window').shadowRoot.querySelector('.submit_btn');
    const checkValid = () => {
      Array.from(Object.keys(validate)).map((el) => {
        if (validate[el] === false) {
          const check = document.querySelector('register-window').shadowRoot.querySelector(htmlRefs[el]);
          check.style.opacity = '100%';
        } else {
          const check = document.querySelector('register-window').shadowRoot.querySelector(htmlRefs[el]);
          check.style.opacity = '0%';
        }
      });
      const checker = Array.from(Object.values(validate)).filter(el => el === false);
      if(checker.length > 0 ? false : true) {
        btn.classList.remove('submit_btn-disabled');
        btn.removeAttribute('disabled');
      } else {
        btn.classList.add('submit_btn-disabled');
        btn.setAttribute('disabled', true);
        return false;
      }
    }
    const email = document.querySelector('register-window').shadowRoot.getElementById('user_email');
    const validateEmail = (email) => {
      const regex = ${regularExpression};
      return regex.test(email);
    };
    email.addEventListener('input', (e) => {
      validate.email = validateEmail(e.target.value);
      checkValid();
    })
    const password = document.querySelector('register-window').shadowRoot.getElementById('user_password');
    password.addEventListener('input', (e) => {
      e.target.value.length < 8 ? validate.password = false : validate.password = true;
      checkValid();
    })
    const country = document.querySelector('register-window').shadowRoot.getElementById('user_profile_attributes_country');
    country.addEventListener('change', (e) => {
      validate.country = true;
      checkValid();
    });
    const age = document.querySelector('register-window').shadowRoot.getElementById('user_profile_attributes_age_acceptance');
    age.addEventListener('change', (e) => {
      validate.age = !validate.age;
      checkValid();
    });
    const terms = document.querySelector('register-window').shadowRoot.getElementById('user_profile_attributes_terms_acceptance');
    terms.addEventListener('change', (e) => {
      validate.terms = !validate.terms;
      checkValid();
    });
`
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    shadow.appendChild(script);
    console.log('style.isConnected: ', style.isConnected);
    console.log('script.isConnected: ', script.isConnected);
  }
}
customElements.define('register-window', RegisterWindow);
