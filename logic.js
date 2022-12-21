const validate = {
      email: false,
      password: false,
      country: false,
      age: false,
      terms: false,
    };
    const btn = document.querySelector('.submit_btn');
    // btn.addEventListener('click', (e) => {
    //   // e.preventDefault();
    //   console.log('submit');

    // });
    const checkValid = () => {
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
    const email = document.getElementById('user_email');
    const validateEmail = (email) => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+")){3,}@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]{2,})+.+[a-zA-Z]{1,}))$/;
      return regex.test(email);
    };
    email.addEventListener('input', (e) => {
      validate.email = validateEmail(e.target.value);
      checkValid();
    })
    const password = document.getElementById('user_password');
    password.addEventListener('input', (e) => {
      e.target.value.length < 8 ? validate.password = false : validate.password = true;
      checkValid();
    })
    const country = document.getElementById('user_profile_attributes_country');
    country.addEventListener('change', (e) => {
      validate.country = true;
      checkValid();
    });
    const age = document.getElementById('user_profile_attributes_age_acceptance');
    age.addEventListener('change', (e) => {
      validate.age = !validate.age;
      checkValid();
    });
    const terms = document.getElementById('user_profile_attributes_terms_acceptance');
    terms.addEventListener('change', (e) => {
      validate.terms = !validate.terms;
      checkValid();
    });
