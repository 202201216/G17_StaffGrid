// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Employee Login', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Employee Login', async function() {
    // Test name: Employee Login
    // Step # | name | target | value
    // 1 | open | /api/login | 
    await driver.get("https://staff-grid.vercel.app/api/login")
    // 2 | setWindowSize | 1552x832 | 
    await driver.manage().window().setRect(1552, 832)
    // 3 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 4 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 5 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 6 | type | id=id | 2024030001
    await driver.findElement(By.id("id")).sendKeys("2024030001")
    // 7 | click | id=password | 
    await driver.findElement(By.id("password")).click()
    // 8 | type | id=password | R123456
    await driver.findElement(By.id("password")).sendKeys("R123456")
    // 9 | click | css=.login-btn | 
    await driver.findElement(By.css(".login-btn")).click()
    // 10 | click | css=.hamburger | 
    await driver.findElement(By.css(".hamburger")).click()
    // 11 | click | linkText=Projects | 
    await driver.findElement(By.linkText("Projects")).click()
    // 12 | mouseOver | linkText=Attendance | 
    {
      const element = await driver.findElement(By.linkText("Attendance"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 13 | mouseOut | linkText=Attendance | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 14 | click | css=.close | 
    await driver.findElement(By.css(".close")).click()
    // 15 | click | css=.project-page | 
    await driver.findElement(By.css(".project-page")).click()
    // 16 | click | css=div:nth-child(1) > .project-card .view-button | 
    await driver.findElement(By.css("div:nth-child(1) > .project-card .view-button")).click()
    // 17 | click | css=.progress | 
    await driver.findElement(By.css(".progress")).click()
    // 18 | click | css=.close:nth-child(12) | 
    await driver.findElement(By.css(".close:nth-child(12)")).click()
  })
})