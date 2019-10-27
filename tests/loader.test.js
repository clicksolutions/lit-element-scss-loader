const compiler = require('./compiler');

/**
 * 
 * 
 * 
 */
describe('The Loader', () => {

  let stats;
  let output;

  beforeAll(async () => {
    stats = await compiler('test.css');
    output = stats.toJson().modules[0].modules[0].source.trim();
  });

  /**
   * 
   */
  test('Creates output', async () => {
    await expect(output).not.toBeNull();
  });

  /**
   * 
   */
  test('Has the CSS content', async () => {
    const content = `background-color: #000000;`;
    const hasContent = output.includes(content)
    await expect(hasContent).toBe(true);
  });

  /**
   * 
   */
  test('Escapes backslahes in content property', async () => {
    const content = `\\2B08`;
    const hasContent = output.includes(content)
    await expect(hasContent).toBe(true);
  });
});