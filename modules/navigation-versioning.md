# Navigation Module Versioning

Navigation changes should remain independently traceable while the catalog is being built.

- Keep each navigation module in its own file where practical.
- Use focused commit messages describing one change.
- Do not overwrite unrelated catalog files as part of a navigation change.
- Keep the build branch as the integration checkpoint until the navigation is tested.
- Merge only the reviewed, working result into `main`.
