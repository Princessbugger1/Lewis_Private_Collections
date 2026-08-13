# Navigation Destination Registry

Each primary destination has a stable identifier so the catalog can add or replace feature modules without changing the navigation controls.

- `coins` — coin catalog
- `paper-money` — paper money catalog
- `lookup` — identification and research
- `collection` — collection management
- `settings` — global catalog settings

Feature modules should register their destination handler rather than modifying the navigation markup directly.
