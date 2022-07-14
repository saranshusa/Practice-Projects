import React from "react";
import classes from "./vevo.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../Assets/homelogo.png";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../../Components/Footer/Footer";

function Vevo() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.menu}>
          <MenuIcon sx={{ fontSize: 40 }} />
          <span>Menu</span>
        </div>
        <div className={classes.logo}>
          <img src={logo} />
          <span>Immigration and citizenship</span>
        </div>
        <div className={classes.search}>
          <SearchIcon sx={{ fontSize: 40 }} />
        </div>
      </div>
      <div className={classes.afterHeader}>
        <p>ImmiAccount</p>
        <p>Visa Entitlement Verification Online (VEVO)</p>
        <p>My Tourist Refund Scheme (TRS)</p>
      </div>
      <div className={classes.banner}>
        <div className={classes.banner_title}>
          <p>Check visa details and conditions</p>
        </div>
        <div className={classes.flower} />
      </div>
      <div className={classes.tabs}>
        <p>Overview</p>
        <p style={{ backgroundColor: "white", color: "black" }}>
          Check conditions online (VEVO)
        </p>
        <p>See visa conditions</p>
        <p>Conditions list</p>
      </div>

      <div className={classes.grid}>
        <div className={classes.left}>
          <p>Check conditions online (VEVO)</p>
          <p>Visa holders</p>
          <p>Organisations</p>
        </div>
        <div>
          <div className={classes.paragraphs}>
            <h2>​​VEVO for visa holders</h2>
            <div className={classes._3x2grid}>
              <h4>- See my visa conditions on VEVO</h4>
              <h4>- Use the myVEVO app</h4>
              <h4>- Email your visa details from VEVO</h4>
              <h4>- Understand your visa details and conditions</h4>
              <h4>- Change your VEVO password</h4>
              <h4>- Error messages</h4>
            </div>
          </div>
          <div className={classes.paragraphs}>
            <h2>See my visa conditions on VEVO</h2>
            <p>
              As a visa holder you can use our Visa Entitlement Verification
              Online system (VEVO) to see your current visa details and
              conditions.
            </p>
            <p>
              VEVO does not provide information on your previous visas or new
              applications that the Department may be assessing.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 1. Access VEVO</h2>
            <p>
              You can access <a href="/enquiry">VEVO</a> online at any time.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 2. Get your number</h2>
            <p>
              To see your visa details and conditions you will need information
              from a travel document such as your passport or ImmiCard. You will
              also need one of the following:
            </p>
            <p>
              <ul>
                <li>a transaction reference number (TRN)</li>
                <li>a visa grant number</li>
                <li>a visa evidence number</li>
              </ul>
            </p>
            <p>
              If you are a New Zealand citizen on Special category visa
              (subclass 444) we may have issued you with a VEVO password that
              you can use to access the VEVO system.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Transaction reference number (TRN)</h2>
            <p>
              You will have a TRN if you applied for your visa online. If you do
              not remember the number you can:
            </p>
            <p>
              <ul>
                <li>
                  look it up on your ImmiAccount under the 'online lodgement
                  summary' screen
                </li>
              </ul>
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Visa grant number</h2>
            <p>
              You will find your visa grant number on your visa grant
              notification letter which you may have received by mail or email.
            </p>
            <p>
              Important: The visa grant number in your grant notification may
              relate to a visa that is not ‘in-effect’. You will only be able to
              access your visa details when you use the grant number of your
              current visa.
            </p>
            <p>
              If you no longer have your grant number you can request a VEVO
              reference number using the VEVO Request for Reference Number Form.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Visa evidence number</h2>
            <p>
              You may have a visa evidence number if you have a visa label
              attached to your passport. Not all passports have a visa label.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 3. Select 'Check your own visa details with VEVO'</h2>
            <p>The visa holder enquiry screen will display.</p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 4. Select the type of travel document</h2>
            <p>VEVO accepts:</p>
            <ul>
              <li>a passport</li>
              <li>an ImmiCard</li>
              <li>
                a convention travel document – also known as a Titre de Voyage
              </li>
              <li>a document for travel to Australia (DFTTA)</li>
              <li>a PLO56 evidence card</li>
            </ul>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 5. Use your number</h2>
            <p>In the 'Reference type' field choose one of these :</p>
            <ul>
              <li>transaction reference number (TRN)</li>
              <li>visa grant number</li>
              <li>visa evidence number</li>
              <li>VEVO password</li>
            </ul>
            <p>You can then type in the number.</p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 6. Enter personal information</h2>
            <p>Enter your:</p>
            <ul>
              <li>date of birth</li>
              <li>your passport number or your ImmiCard number</li>
            </ul>
            <p>
              If you use your passport in VEVO, you will need to select the
              country that issued your passport. If you are using a Titre de
              Voyage (TDV) you need to enter the ‘country’ as the ‘nationality’
              shown in the TDV.
            </p>
            <p>
              If you use your ImmiCard you will not need to select a country.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 7. Submit the information</h2>
            <p>Click the box to accept VEVO's terms and conditions.</p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Use the myVEVO app</h2>
            <p>
              You can also view and email your visa details and conditions using
              the myVEVO app on your phone.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 1. Download myVEVO</h2>
            <p>
              You can download the myVEVO app for free from the Apple iTunes
              store or Google Play store.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 2. Create a personal identification number (PIN)</h2>
            <p>
              Your personal identification number (PIN) becomes your secure code
              number to quickly access your visa details through the myVEVO app
              in future. You will also be given the option to set up a finger
              print scan to access myVEVO.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 3. Have your passport or ImmiCard details ready</h2>
            <p>Select passport or ImmiCard from the 'document type' options.</p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 4. Enter personal information</h2>
            <p>Enter your:</p>
            <ul>
              <li>date of birth</li>
              <li>your passport number or your ImmiCard number</li>
            </ul>
            <p>
              If you use your passport in myVEVO, you will need to select the
              country that issued your passport. If you are using a Titre de
              Voyage (TDV) you need to enter the ‘country’ as the ‘nationality’
              shown in the TDV.
            </p>
            <p>
              If you use your ImmiCard you will not need to select a country.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 5. Submit the information</h2>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 6. Accept terms and conditions</h2>
          </div>
          <div className={classes.paragraphs}>
            <h2>Email your visa details from VEVO</h2>
            <p>
              You can use VEVO to email information about your visa conditions
              to another person, such as an employer, a landlord or the
              government of a country you would like to visit.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 1. Access your details</h2>
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 2. Select 'Send Email'</h2>
            <p>Select 'Send Email'. This will open a 'Create email' screen </p>
            <img src="https://immi.homeaffairs.gov.au/visa-conditions-subsite/PublishingImages/email-from-vevo.jpg" />
          </div>
          <div className={classes.paragraphs}>
            <h2>Step 3. Prepare and send email</h2>
            <ol>
              <li>
                Enter the email address of the person you want to receive your
                email in the 'Recipient email address' field.
              </li>
              <li>
                Enter your email address in the 'Your email address' field.
              </li>
              <li>Once your information is correct, click 'Send Email'.</li>
            </ol>
            <p>
              A new message will appear on the 'visa details' screen to show
              that your email has been sent.{" "}
            </p>
            <img src="https://immi.homeaffairs.gov.au/visa-conditions-subsite/PublishingImages/email-vevo-sent.jpg" />
          </div>
          <div className={classes.paragraphs}>
            <h2>Understand your visa details and conditions</h2>
            <p>
              VEVO can show you the following details and conditions on your
              visa:
            </p>
            <table>
              <tbody>
                <tr>
                  <th scope="col">Visa details in VEVO</th>
                  <th scope="col">What it means</th>
                </tr>
                <tr>
                  <td>Current date and time</td>
                  <td>Details of the time and date you checked VEVO.</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>This shows your name as recorded in our systems.</td>
                </tr>
                <tr>
                  <td>Document/Immicard number</td>
                  <td>
                    The travel document number that you used to make the VEVO
                    query.
                  </td>
                </tr>
                <tr>
                  <td>Visa class and subclass</td>
                  <td>Details of the visa you have been granted.</td>
                </tr>
                <tr>
                  <td>Visa streams or Education sector</td>
                  <td>
                    The stream associated to the visa class and subclass of your
                    visa. For example, Visitor Visa Tourist stream, Student
                    Non-Award Sector.
                  </td>
                </tr>
                <tr>
                  <td>Visa description</td>
                  <td>
                    Advises the type of visa granted, for example, Student,
                    Visitor or Resident Return.
                  </td>
                </tr>
                <tr>
                  <td>Visa applicant</td>
                  <td>
                    Shows if you are the main (primary) visa applicant or a
                    family member (secondary) applicant.
                  </td>
                </tr>
                <tr>
                  <td>Visa grant date</td>
                  <td>
                    The date the department made a decision to give you a visa.
                  </td>
                </tr>

                <tr>
                  <td>Visa expiry date</td>
                  <td>
                    For temporary visa holders only.
                    <br />
                    If you are:
                    <ul>
                      <li>
                        Outside Australia, this is the date your visa ends
                      </li>
                      <li>
                        In Australia, this is the date the period of stay ends
                        on your visa and you must leave Australia before
                        midnight (Canberra, Australia time) on this date.
                      </li>
                    </ul>
                    For permanent visa holders only.
                    <br />
                    If you are:
                    <ul>
                      <li>
                        Outside Australia, this is the date that your travel
                        facility ends.
                      </li>
                    </ul>
                    You will need to apply for a{" "}
                    <a href="/visas/getting-a-visa/visa-listing/bridging-visa-b-020#About">
                      Resident Return visa
                    </a>{" "}
                    if you do not return to Australia before the expiry date.
                    <p>
                      Holders of a permanent resident visa, who depart Australia
                      will also have VEVO show an Expiry date.&nbsp;This date is
                      the date the travel facility is due to end.&nbsp;You will
                      need to apply for a{" "}
                      <a href="/visas/getting-a-visa/visa-listing/resident-return-visa-155-157">
                        Resident Return visa
                      </a>{" "}
                      if the travel facility date passes while you are outside
                      Australia.
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>Visa status</td>
                  <td>
                    The status of your visa.
                    <ul>
                      <li>
                        ‘In effect’ means that your visa has started, but it
                        will not be activated until you enter Australia.
                      </li>
                      <li>
                        ‘Temporarily ceased’ means your ‘Longer Validity’
                        Visitor visa has temporarily ceased.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Visa grant number</td>
                  <td>The number that identifies your visa.</td>
                </tr>
                <tr>
                  <td>Entries allowed</td>
                  <td>
                    A visa might be granted for a single entry or multiple
                    entries within a specified period.
                    <ul>
                      <li>Single entry: you can only enter Australia once.</li>
                      <li>
                        Multiple entry: you can travel to and from Australia as
                        many times as you want while your visa is valid, but the
                        total time you spend in Australia cannot be more than
                        the period of stay that you have been granted.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Must enter before date</td>
                  <td>
                    If you applied for your visa while outside Australia and
                    your visa allows multiple entries into Australia, this is
                    the date by which you must make your first entry.
                  </td>
                </tr>
                <tr>
                  <td>Must not arrive after date</td>
                  <td>
                    You must enter Australia before this date. As long as you
                    enter Australia before this date you are allowed to be in
                    Australia for the stay period listed for your visa.
                    <br />
                    For temporary visa holders, this is generally the date your
                    visa ends.
                    <br />
                    For permanent residents (including resident return visa
                    holders), this is the date the travel facility of your visa
                    ends. That means if you depart Australia after this date you
                    will require a{" "}
                    <a href="/visas/getting-a-visa/visa-listing/resident-return-visa-155-157">
                      Resident Return Visa (subclass 155 and 157)
                    </a>{" "}
                    to re-enter Australia. Departing Australia without a
                    resident return visa can impact your permanent residency
                    requirements for citizenship.
                  </td>
                </tr>
                <tr>
                  <td>Period of stay</td>
                  <td>
                    Tells you how long you are allowed to stay in Australia on
                    your visa.
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>
                    Whether you are inside or outside Australia when you make a
                    VEVO check.
                  </td>
                </tr>
                <tr>
                  <td>Work entitlements</td>
                  <td>
                    This will let you know whether you are allowed to work in
                    Australia while holding the visa.
                  </td>
                </tr>
                <tr>
                  <td>Workplace rights</td>
                  <td>
                    Information to assist you to understand your Australian
                    workplace rights and protections.
                  </td>
                </tr>
                <tr>
                  <td>Study entitlements</td>
                  <td>
                    This will let you know whether you are able to undertake a
                    course of study on your current visa.
                  </td>
                </tr>
                <tr>
                  <td>Visa conditions</td>
                  <td>
                    For temporary visa holders only.
                    <br />
                    Tells you what you can and cannot do while in Australia on
                    your visa.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={classes.paragraphs}>
            <h2>Change your VEVO password</h2>
            <p>
              When you have been provided a password you can change your VEVO
              password at any time. This is the password only for the system
              accessed via a computer.
            </p>

            <p>
              Note: Passwords are only provided to New Zealand citizens who hold
              a valid Special Category Visa (Subclass 444).
            </p>

            <p>
              New Zealand citizens can{" "}
              <a href="/help-support/contact-us">contact us</a> to obtain a
              password to check their own visa details on VEVO.
            </p>

            <p>
              The myVEVO app does not use a password. If you enter the pin
              incorrectly on the app three times, it will ask you to set a new
              pin.
            </p>

            <h2>Step 1. Have your details ready</h2>

            <p>
              You will need your existing password, your date of birth, and your
              passport or ImmiCard number to make the change.
            </p>

            <h2>Step 2. Go to VEVO for visa holders</h2>

            <p>Click 'change password' and make the changes.</p>
          </div>
          <div className={classes.paragraphs}>
            <h2>Error messages</h2>
            <p>You may get an error message when using VEVO.</p>

            <p>
              Please check that you have entered the information correctly. Do
              not confuse similar letters and numbers, such as the letter ‘I’
              and the number ‘1’, or ‘O’ and ‘0’. Check that you have not
              entered the wrong details in a field.
            </p>

            <p>You may get an error message if:</p>

            <ul>
              <li>
                You enter a &nbsp;visa grant number for a visa that is not
                ‘in-effect’.&nbsp; You need to use the reference number of your
                current visa.
              </li>
              <li>Your visa has expired.</li>
              <li>
                You arrived in Australia before 1990, and you are not listed in
                our electronic systems. You will need to ask us to create
                an&nbsp;
                <a href="/visas/permanent-resident/evidence-of-residency-status/request-an-electronic-visa-record">
                  electronic visa record
                </a>
                .
              </li>
              <li>
                You get a new travel document, and we are still processing the
                update to your details.
              </li>
              <li>
                Our systems have conflicting information about you, for example
                different dates of birth.
              </li>
            </ul>

            <h3>What should I do?</h3>

            <p>
              If you still get an error message after checking your data entry,
              follow the instructions on the error message.
            </p>

            <p>
              If your error is unresolved, you can contact us to discuss by
              using the{" "}
              <a
                href="/help-support/departmental-forms/online-forms/vevo-enquiry-form"
                target="_blank"
              >
                Visa Entitlement Online Enquiry form
              </a>
              .
            </p>

            <p>
              When you contact us, please tell us what the error message said.
              You will also need to provide a copy of your travel document
              /ImmiCard and preferably a screen shot of the error message.
            </p>
          </div>
          <div className={classes.paragraphs}>
            <h2>What should I do?</h2>
            <p>
              If you still get an error message after checking your data entry,
              follow the instructions on the error message.
            </p>
            <p>
              If your error is unresolved, you can contact us to discuss by
              using the Visa Entitlement Online Enquiry form.
            </p>
            <p>
              When you contact us, please tell us what the error message said.
              You will also need to provide a copy of your travel document
              /ImmiCard and preferably a screen shot of the error message.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Vevo;
