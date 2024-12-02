// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('SalaryHR', function() {
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
  it('SalaryHR', async function() {
    // Test name: SalaryHR
    // Step # | name | target | value
    // 1 | open | /api/login | 
    await driver.get("https://staff-grid.vercel.app/api/login")
    // 2 | setWindowSize | 1552x832 | 
    await driver.manage().window().setRect(1552, 832)
    // 3 | click | id=id | 
    await driver.findElement(By.id("id")).click()
    // 4 | type | id=id | 2024010008
    await driver.findElement(By.id("id")).sendKeys("2024010008")
    // 5 | type | id=password | wrX_Am9y
    await driver.findElement(By.id("password")).sendKeys("wrX_Am9y")
    // 6 | click | css=.login-btn | 
    await driver.findElement(By.css(".login-btn")).click()
    // 7 | click | css=.hamburger | 
    await driver.findElement(By.css(".hamburger")).click()
    // 8 | click | linkText=Salary | 
    await driver.findElement(By.linkText("Salary")).click()
    // 9 | click | css=.close | 
    await driver.findElement(By.css(".close")).click()
    // 10 | click | css=.add-btn | 
    await driver.findElement(By.css(".add-btn")).click()
    // 11 | click | name=employees.0.employeeId | 
    await driver.findElement(By.name("employees.0.employeeId")).click()
    // 12 | type | name=employees.0.employeeId | 2024020004
    await driver.findElement(By.name("employees.0.employeeId")).sendKeys("2024020004")
    // 13 | click | name=employees.0.salary | 
    await driver.findElement(By.name("employees.0.salary")).click()
    // 14 | type | name=employees.0.salary | 200000
    await driver.findElement(By.name("employees.0.salary")).sendKeys("200000")
    // 15 | click | name=employees.0.bonus | 
    await driver.findElement(By.name("employees.0.bonus")).click()
    // 16 | select | name=employees.0.bonus | label=Bonus B
    {
      const dropdown = await driver.findElement(By.name("employees.0.bonus"))
      await dropdown.findElement(By.xpath("//option[. = 'Bonus B']")).click()
    }
    // 17 | click | css=.btn-primary | 
    await driver.findElement(By.css(".btn-primary")).click()
  })
})