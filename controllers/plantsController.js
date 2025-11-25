const plantsService = require("../services/plantsService");

exports.getAll = (req, res) => {
  const items = plantsService.getAll();
  res.json({
    ok: true,
    data: items,
  });
};

exports.create = (req, res) => {
  const payload = req.body || {};
  if(req.file){
    payload.imgUrl = `/uploads/${req.file.filename}`;
  }

  if (!payload || !payload.name) {
    return res.status(400).json({ ok: false, error: "Missing payload" });
  }
  
  const created = plantsService.create(payload);
  res.status(201).json({ ok: true, data: created });
};

exports.modify = (req, res) => {
  const payload = req.body;
  if (!payload) {
    return res.status(400).json({ ok: false, error: "Missing payload" });
  }
  const modified = plantsService.modify({
    id: payload.id,
    changes: payload.changes,
  });
  res.status(201).json({
    ok: true,
    data: modified,
  });
};
exports.delete = (req, res) => {
  const payload = req.body;
  if (!payload) {
    return res.status(400).json({ ok: false, error: "Missing payload" });
  }
  const deleted = plantsService.delete({ id: payload.id });

  res.status(201).json({
    ok: true,
    data: deleted,
  });
};
