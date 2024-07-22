const leftSideNavLinks = document.querySelectorAll('.left-side-nav-link');
const leftSideNav = document.getElementById('left-side');

leftSideNavLinks.forEach((leftSideNavLink) => {
   leftSideNavLink.addEventListener('click', (e) => {
      // leftSideNav.classList.remove('left-side-show-nav');
      e.preventDefault();

      leftSideNavLinks.forEach((link) => {
         if (link !== leftSideNavLink && link.classList.contains('isActive')) {
            link.classList.remove('isActive');
         }
      });

      leftSideNavLink.classList.toggle('isActive');
   });
});

const hour = new Date().getHours();
const greetingMessage = document.getElementById('greetingMessage');

let greeting;

if (hour < 12) {
   greeting = 'Good morning,';
} else if (hour < 17) {
   greeting = 'Good afternoon,';
} else {
   greeting = 'Good evening,';
}

greetingMessage.innerText = greeting;

let now = new Date();
let time = now.toLocaleTimeString();
document.getElementById('time').innerText = time;

// let date = now.toLocaleDateString();
// document.getElementById("date").innerText = date;

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.ipify.org?format=json', true);
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4 && xhr.status === 200) {
      let ip = JSON.parse(xhr.responseText).ip;
      document.getElementById('ip').innerText = ip;
   }
};
xhr.send();

const rightSideProfileDropDownbtn = document.getElementById(
   'rightSideProfileDropDownbtn'
);
const rightSideProfileHeaderDropDownContent = document.getElementById(
   'rightSideProfileHeaderDropDownContent'
);

rightSideProfileDropDownbtn.addEventListener('click', () => {
   rightSideProfileHeaderDropDownContent.classList.toggle(
      'showDropDownContent'
   );
   rightSideProfileDropDownbtn.classList.toggle('rotateDropDown');
});

const rightSideHeaderNotificationBtn = document.getElementById(
   'rightSideHeaderNotificationBtn'
);
const rightSideHeaderNotificationsContent = document.getElementById(
   'right-side-header-notification-content'
);

const rightSideHeaderMarkAsReadBtn = document.getElementById(
   'rightSideHeaderMarkAsReadBtn'
);
const rightSideHeaderNotificationLabel = document.getElementById(
   'rightSideHeaderNotificationLabel'
);
const rightSideNotificationsList = document.getElementById(
   'rightSideNotificationsList'
);

rightSideHeaderNotificationBtn.addEventListener('click', () => {
   rightSideHeaderNotificationsContent.classList.toggle(
      'showNotificationsContent'
   );
});

rightSideHeaderMarkAsReadBtn.addEventListener('click', () => {
   rightSideNotificationsList.classList.add('read');
   rightSideHeaderNotificationLabel.style.display = 'none';
});

const openTab = (sectionName) => {
   let i;
   const tabContent = document.getElementsByClassName('tab-content');
   for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = 'none';
   }

   let tablinks = document.getElementsByClassName('tablinks');
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('nowActive');
   }

   document.getElementById(sectionName).style.display = 'block';
   document
      .querySelector('button[onclick="openTab(\'' + sectionName + '\')"]')
      .classList.add('nowActive');
};
