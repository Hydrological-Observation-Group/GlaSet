# Global High-Precision Glacier Interpretation Dataset

To address the scarcity of high-quality training data in glacier mapping, we present a new **global glacier interpretation dataset** designed to overcome the limitations of traditional inventories (e.g., RGI) in terms of **temporal currency, labeling consistency, and scene diversity**.

---

## Coverage and Sampling Strategy

- **Geographic scope**: Covers major glacierized regions including **High Mountain Asia, the European Alps, and Alaska**, with additional high-latitude examples.
- **Challenging scenarios included**: Debris-covered ice, topographic shadow, and frequent cloud/fog interference.
- **Current size**: **65 expert-labeled scenes** (and growing!).

---

## Data Sources and Spectral Bands

All images are acquired between **August and October** (late ablation season) to minimize seasonal snow contamination. We use six harmonized spectral bands and fuse a 30 m elevation model (ALOS AW3D30).

| Platform     | Sensor   | Selected Bands                                      | Resolution |
|--------------|----------|-----------------------------------------------------|------------|
| Landsat 5    | TM       | SR_B1, SR_B2, SR_B3, SR_B4, SR_B5, SR_B7           | 30 m       |
| Landsat 7    | ETM+     | SR_B1, SR_B2, SR_B3, SR_B4, SR_B5, SR_B7           | 30 m       |
| Landsat 8/9  | OLI      | SR_B2, SR_B3, SR_B4, SR_B5, SR_B6, SR_B7           | 30 m       |
| Sentinel-2   | MSI      | B2, B3, B4, B8, B11, B12                           | 30 m       |
| ALOS         | PRISM    | AW3D30 (Elevation)                                 | 30 m       |

> Landsat-7 data is restricted to 1999–2003 to avoid SLC-off gaps.

---

## Data Processing Workflow

(You can add a brief description of your processing workflow here.)

![Data Processing Flowchart](./figures/dataworkflow.png)

---

## Dataset Visualization

![Dataset Distribution and Sample Gallery](./figures/data.jpg)

> *Left: Thumbnail mosaic of all 65 labeled scenes; Right: Global distribution of sample locations.*

---

## Labeling Examples

#### **Example 1: (Greenland)**

| Input Image  | Ground Truth Mask |
|:---:|:---:|
| ![Input 1](./figures/1.jpg) | ![Mask 1](./figures/1-truth.jpg) |

---

#### **Example 2: (High Mountain Asia)**

| Input Image  | Ground Truth Mask |
|:---:|:---:|
| ![Input 2](./figures/2.jpg) | ![Mask 2](./figures/2-truth.jpg) |

---
