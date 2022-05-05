const linksSocialMedia = {
  github: 'illidan-st',
  youtube: 'UCqLUH6ZD4QUY4X0x8UbxOMg',
  facebook: 'valtuir.sturlini',
  instagram: 'el.valtuiro',
  twitter: 'illidan_kn'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogion.textContent = data.login
    })
}

getGitHubProfileInfos()
