export const home = (req, res, next, template) => {
    res.render(template, { title: 'Express' });
}