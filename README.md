# Zh Status Item

A crafting system that utilizes item metadata from ox_inventory, 
allowing items to be created by simply modifying the configuration without need to create items in ox_inventory.

## Preview
![Screenshot 2024-06-01 031918](https://github.com/ZHOURA-24/zh_statusitem/assets/98719591/b84807a3-cba0-4eb1-8737-7a11154bdc04)

## Installation

### Install all resource dependencies
- [ox_target](https://github.com/overextended/ox_target)
- [ox_lib](https://github.com/overextended/ox_lib)

### Clone a repository or [download](https://github.com/ZHOURA-24/zh_statusitem/releases) here

```
git clone https://github.com/ZHOURA-24/zh_statusitem
```

### Add item to ox_inventory/data/items.lua

```
 ['status_item'] = {
		label = 'Status Item',
		weight = 100,
		stack = true,
		close = true,
		client = {
			export = 'zh_statusitem.status_item',
		}
	}
```

### Add all [images](https://github.com/ZHOURA-24/zh_statusitem/tree/main/web/public/images) to ox_inventory/web/images/ 


### Start resource

```
start zh_statusitem
```
