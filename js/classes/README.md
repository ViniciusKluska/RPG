# Classes Files Structure

This directory contains individual JSON files for each class in the Ghanor RPG system.

## File Structure

- Each class has its own JSON file named with its ID (e.g. `guerreiro.json`, `mago.json`)
- `summary.json` contains a list of all classes with basic information

## Using These Files

To update a class:
1. Edit the individual class file
2. Run the `npm run update-classes` script to update the database

## Class JSON Structure

Each class file follows this structure:

```json
{
  "id": "class_id",
  "name": "Class Name",
  "description": "Class description",
  "role": {
    "combat": "role in combat (damage/tank/support/etc)",
    "party": "role in party (front-line/face/utility/etc)"
  },
  "hit_dice": "dice type for hit points (d8, d10, etc)",
  "mana_dice": "dice type for mana points",
  "initial_hp": 10,
  "initial_mp": 5,
  "armor_proficiency": ["light", "medium", "heavy", "shields"],
  "weapon_proficiency": ["simple", "martial"],
  "initial_skills": 4,
  "class_skills": ["skill1", "skill2", "skill3"],
  "abilities": [
    {
      "level": 1,
      "name": "Ability Name",
      "description": "Ability description"
    }
  ]
}
```
