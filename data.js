var APP_DATA = {
  "scenes": [
    {
      "id": "0-art-gallery-1f---hall",
      "name": "[ART GALLERY] 1F - HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7635080690797071,
          "pitch": 0.2893103958674903,
          "rotation": 0,
          "target": "1-art-gallery-1f---main"
        },
        {
          "yaw": -2.6526972368844994,
          "pitch": 0.1405156122003106,
          "rotation": 4.71238898038469,
          "target": "2-art-gallery-2f"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2687120101840996,
          "pitch": 0.10582149027383458,
          "title": "ART-1",
          "text": "원하는 설명"
        },
        {
          "yaw": 0.5520587708109499,
          "pitch": 0.08036363540629488,
          "title": "ART-2",
          "text": "원하는 설명"
        },
        {
          "yaw": 0.6896700771584072,
          "pitch": 0.05498477294661441,
          "title": "ART-3",
          "text": "원하는 설명"
        }
      ]
    },
    {
      "id": "1-art-gallery-1f---main",
      "name": "[ART GALLERY] 1F - MAIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5924850504194374,
          "pitch": 0.4169428935980726,
          "rotation": 5.497787143782138,
          "target": "0-art-gallery-1f---hall"
        },
        {
          "yaw": -1.014583956813265,
          "pitch": 0.02703098722986219,
          "rotation": 1.5707963267948966,
          "target": "2-art-gallery-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-art-gallery-2f",
      "name": "[ART GALLERY] 2F",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6423671084945646,
          "pitch": 0.6335747695930891,
          "rotation": 0.7853981633974483,
          "target": "0-art-gallery-1f---hall"
        },
        {
          "yaw": 1.62628672820626,
          "pitch": 0.41680525329967466,
          "rotation": 7.853981633974483,
          "target": "1-art-gallery-1f---main"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "[DEMO] Online Art Gallery",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
